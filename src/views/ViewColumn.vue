/* eslint-disable @typescript-eslint/no-explicit-any */

<style>
.renderedJson {
  overflow-x: scroll;
}

.renderjson a {
  text-decoration: none;
}
.renderjson .disclosure {
  color: crimson;
  font-size: 150%;
}
.renderjson .syntax {
  color: grey;
}
.renderjson .string {
  color: darkred;
}
.renderjson .number {
  color: darkcyan;
}
.renderjson .boolean {
  color: blueviolet;
}
.renderjson .key {
  color: darkblue;
}
.renderjson .keyword {
  color: blue;
}
.renderjson .object.syntax {
  color: lightseagreen;
}
.renderjson .array.syntax {
  color: orange;
}

.renderjson .disclosure {
  display: none;
}

.rounded {
  position: relative;
}

.awesome-marker svg {
  width: 15px;
  height: 15px;
  margin-top: 11px;
}

.copyButtons {
  position: absolute;
  right: 10px;
  top: 15px;
  display: flex;
  flex-direction: column;
  text-align: right;
}

.copyButtons button:not(:first-child) {
  margin-top: 5px;
}

.hiddenCopy {
  height: 0;
  position: absolute;
  z-index: -1;
  opacity: 0.001;
}
</style>

<template>
  <b-col :cols="12 / numHosts">
    <div class="messages">
      <div
        class="alert alert-danger"
        v-for="(message, index) in body.geocoding.errors"
        :key="index"
      >
        {{ message }}
      </div>
      <div
        class="alert alert-warning"
        v-for="(message, index) in body.geocoding.warnings"
        :key="index"
      >
        {{ message }}
      </div>
    </div>

    <h4
      class="code-title code-title-silver"
      style="
      position: sticky;
      top: 0px;
      z-index: 100;
      padding-left: 10px;
    "
    >
      <span class="title"
        >&nbsp;<a :href="url">{{ host }}</a></span
      >
    </h4>
    <div class="response shadow">
      <div class="code rounded" v-if="body.features && body.features.length">
        <ResultsSummary :features="body.features" v-on:feature-clicked="featureClicked" />
      </div>
      <div class="code rounded" v-else>
        No Results
      </div>
    </div>

    <div
      class="assertion shadow rounded"
      style="
      margin-top:-10px;
      position: sticky;
      top: 30px;
      z-index: 100;
    "
    >
      <l-map
        style="
          height: 200px;
        "
        :center="center"
        :zoom="13"
        ref="mymap"
        :options="{ scrollWheelZoom: false }"
      >
        <l-tile-layer :url="tileUrl" :attribution="attribution" />
      </l-map>
    </div>

    <div
      class="assertion shadow rounded"
      v-if="body"
      style="
      margin-top:5px;
    "
    >
      <div class="copyButtons">
        <b-button class="copyJson" @click="copyJson">Copy JSON</b-button>
        <b-button class="copyEsQuery" v-if="esQuery" @click="copyEsQuery">Copy ES Query</b-button>
      </div>
      <div class="renderedJson" ref="renderedJson"></div>
    </div>
    <div class="hiddenCopy"><textarea ref="hiddenCopyInput"></textarea></div>
  </b-col>
</template>

<script lang="ts">
import renderjson from '@/vendor/renderjson';
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as L from 'leaflet';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faMap,
  faObjectUngroup,
  faDotCircle,
  faMapSigns,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons';
import { faWeebly } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { latLng } from 'leaflet';

import AwesomeMarkers from '@/vendor/leaflet.awesome-markers';
import '@/vendor/leaflet.awesome-markers.css';

import ResultsSummary from './ResultsSummary.vue';

const icons = [faWeebly, faDotCircle, faMapSigns, faLanguage, faMap, faObjectUngroup];
icons.forEach((i) => library.add(i));

function parseHTML(s: string) {
  const tmp = document.implementation.createHTMLDocument();
  tmp.body.innerHTML = s;
  return tmp.body.children[0];
}

function renderjsonReplacer(key: string, value: string) {
  const makeLink = (url: string, customText?: string) => parseHTML(`<a href="${url}">"${customText || value}"</a>`);

  if (typeof value === 'string' && value.startsWith('whosonfirst:')) {
    const parts = value.split(':');
    const id = parts[parts.length - 1];
    return makeLink(`https://spelunker.whosonfirst.org/id/${id}`);
  }
  // "gid": "openaddresses:address:us/tn/statewide:db4775140901eba0",
  if (typeof value === 'string' && value.startsWith('openaddresses:')) {
    const parts = value.split(':');
    if (parts.length > 2) {
      const filepath = parts[2];
      return parseHTML(
        `<span>"${parts[0]}:${
          parts[1]
        }:<a href="https://github.com/openaddresses/openaddresses/blob/master/sources/${filepath}.json">${
          parts[2]
        }</a>:${parts.slice(3).join(':')}"</span>`,
      );
    }
  }
  // gid: openstreetmap:address:node/2601893113
  const OSM_PREFX = 'openstreetmap:';
  if (typeof value === 'string' && value.startsWith(OSM_PREFX)) {
    const gidParts = value.split(':');
    if (gidParts.length !== 3) {
      return value;
    }

    return makeLink(`https://www.openstreetmap.org/${gidParts[2]}`);
  }

  // "gid": "geonames:locality:4887398", --> https://www.geonames.org/4887398
  if (typeof value === 'string' && value.startsWith('geonames:')) {
    const parts = value.split(':');
    const geonameId = parts[parts.length - 1];
    return makeLink(`https://www.geonames.org/${geonameId}`);
  }

  return value;
}

const markers = {
  default: AwesomeMarkers.icon({
    icon: faDotCircle,
    markerColor: 'purple',
  }),
  geonames: AwesomeMarkers.icon({
    icon: faMapSigns,
    markerColor: 'darkpurple',
  }),
  wof: AwesomeMarkers.icon({
    icon: faWeebly,
    markerColor: 'green',
  }),
  openstreetmap: AwesomeMarkers.icon({
    icon: faMap,
    markerColor: 'red',
  }),
  openaddresses: AwesomeMarkers.icon({
    icon: faLanguage,
    markerColor: 'orange',
  }),
  quattroshapes: AwesomeMarkers.icon({
    icon: faObjectUngroup,
    markerColor: 'darkgreen',
  }),
};

@Component({
  components: { FontAwesomeIcon, ResultsSummary },
})
export default class ViewColumn extends Vue {
  @Prop() private body!: any;

  @Prop() private url!: string;

  @Prop() private numHosts!: number;

  @Prop() private host!: string;

  private renderedJson: any = null;

  private summary = '';

  center = latLng(47.41322, -1.219482);

  tileUrl =
    '//{s}.tile.jawg.io/jawg-terrain/{z}/{x}/{y}.png?access-token=t6fAKnvaPdPCucraY88YwlKjBfUHqBMvvZBIWlcp1Z9Z5FVtA02uWo6Dc9DGB2JO';

  attribution =
    'Map &copy; <a href="http://jawg.io" target="_blank" class="jawg-attrib"><b>Jawg</b>Maps</a> | Map data &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" class="osm-attrib">OpenStreetMap contributors</a>';

  centerFeatures(features: GeoJSON.FeatureCollection) {
    const geoJsonLayer = L.geoJSON(features);

    let bounds = geoJsonLayer.getBounds();

    // pad bounds to the marker fit on screen
    try {
      bounds = bounds.pad(0.5);
      this.getMap().fitBounds(bounds);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  mounted() {
    // jawg url is specified with "//" which fails when loading built index.html
    // as a file
    if (window.location.protocol === 'file:' && !this.tileUrl.includes('http:')) {
      this.tileUrl = `http:${this.tileUrl}`;
    }

    renderjson.set_replacer(renderjsonReplacer);
    renderjson.set_show_to_level('all');

    (this.$refs.renderedJson as any).appendChild(renderjson(this.body, `response-${this.host}`));
    this.getMap().invalidateSize();
    this.centerFeatures(this.body.features);

    this.addBoundingBoxes();
    this.addMarkers();
  }

  addMarkers() {
    const geojson = this.body;
    // add a red marker to map to indicate the focus centre point.
    let focusPoint = null;
    if (geojson?.data?.geocoding.query) {
      const { query } = geojson.data.geocoding;
      if (query && query['focus.point.lat'] && query['focus.point.lon']) {
        focusPoint = { lon: query['focus.point.lon'], lat: query['focus.point.lat'] };
      }
    }
    // all custom icon logic
    const pointToLayer = function style(f: GeoJSON.Feature, latlon: L.LatLng) {
      let i = markers.default;

      // custom icon created from geojson properties
      if (f.properties?.icon) {
        i = AwesomeMarkers.icon({
          icon: f.properties.icon,
          markerColor: f.properties['marker-color'] || 'red',
        });
      } else {
        switch (f.properties?.source) {
          case 'openstreetmap':
          case 'osm':
            i = markers.openstreetmap;
            break;
          case 'whosonfirst':
          case 'wof':
            i = markers.wof;
            break;
          case 'geonames':
          case 'gn':
            i = markers.geonames;
            break;
          case 'quattroshapes':
          case 'qs':
            i = markers.quattroshapes;
            break;
          case 'openaddresses':
          case 'oa':
            i = markers.openaddresses;
            break;
          default:
            i = markers.default;
            break;
        }
      }

      return L.marker(latlon, {
        title: `${f.properties?.gid} - ${f.properties?.label}`,
        icon: i,
      }).bindPopup(
        `<p>
          <strong style="font-size:14px">
            ${f.properties?.label}
          </strong>
          <br />
          ${f.properties?.gid}
        </p>`,
      );
    };

    const style = (f: any) => f.properties;

    if (geojson.data?.features) {
      if (focusPoint) {
        geojson.data.features.push({
          type: 'Feature',
          properties: {
            'marker-color': 'blue',
            icon: 'crosshairs',
            gid: `lat: ${focusPoint.lat}, lon: ${focusPoint.lon}`,
            label: 'focus.point',
          },
          geometry: {
            type: 'Point',
            coordinates: [focusPoint.lon, focusPoint.lat],
          },
        });
      }
    }

    L.geoJSON(geojson, {
      pointToLayer,
      style,
    }).addTo(this.getMap());
  }

  addBoundingBoxes() {
    const style = {
      stroke: true,
      color: 'blue',
      opacity: 0.5,
      dashArray: '5, 5',
      fillColor: 'blue',
      fillOpacity: 0.0,
      weight: 2,
    };

    const bboxLayer = new L.GeoJSON();
    (this.body.features || []).forEach((feat: { bbox: number[] }) => {
      if (feat?.bbox) {
        const bounds = [
          [feat.bbox[1], feat.bbox[0]],
          [feat.bbox[3], feat.bbox[2]],
        ];
        const rect = new L.Rectangle(bounds as any, style);
        rect.addTo(bboxLayer);
      }
    });
    this.getMap().addLayer(bboxLayer);
  }

  // eslint-disable-next-line class-methods-use-this
  getZoomLevelForLayer(layer: string) {
    switch (layer) {
      case 'locality':
      case 'localadmin':
      case 'neighbourhood':
      case 'borough':
      case 'county':
      case 'macrocounty':
        return 10;
      case 'region':
      case 'macroregion':
      case 'country':
        return 6;
      case 'venue':
      case 'address':
      case 'mixed':
      case 'street':
        return 12;
      default:
        return 6;
    }
  }

  featureClicked({ feature, index }: { feature: GeoJSON.Feature; index: number }) {
    const geojson = L.geoJSON(feature);
    const bounds = geojson.getBounds();

    if (feature.geometry.type === 'Point') {
      this.getMap().setView(
        bounds.getCenter(),
        this.getZoomLevelForLayer(feature.properties?.layer || ''),
      );
    } else {
      this.getMap().fitBounds(bounds);
    }

    const previouslyHighlightedElemented = document.getElementsByClassName('highlightedFeature');
    // eslint-disable-next-line no-restricted-syntax
    for (const highlightedFeature of previouslyHighlightedElemented) {
      highlightedFeature.classList.remove('highlightedFeature');
    }

    const elem = document.getElementById(`response-${this.host}.features.${index}`);
    if (elem) {
      elem.scrollIntoView();
      elem.classList.add('highlightedFeature');
    }
  }

  getMap(): L.Map {
    return ((this.$refs.mymap as unknown) as { mapObject: L.Map }).mapObject;
  }

  copyHelper(stringToCopy: string, copyName: string) {
    /* Get the text field */
    const copyText = this.$refs.hiddenCopyInput as HTMLInputElement;
    copyText.value = JSON.stringify(stringToCopy, null, 4);

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 9999999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand('copy');

    /* Alert the copied text */
    this.$bvToast.toast(`${copyName} copied to clipboard`, {
      title: 'Status',
      autoHideDelay: 1000,
      appendToast: true,
      variant: 'success',
      toaster: 'b-toaster-bottom-center',
    });
  }

  copyJson() {
    this.copyHelper(this.body, 'JSON Response');
  }

  copyEsQuery() {
    this.copyHelper(this.esQuery, 'ES Query');
  }

  get esQuery() {
    const esReqEntries = this.body?.geocoding?.debug
      ?.map(
        (debugEntry: Record<string, any>) => (debugEntry['controller:search'] || {}).ES_req?.body
      )
      .filter((e: any) => Boolean(e));
    if (esReqEntries) {
      return esReqEntries[0];
    }
    return '';
  }
}
</script>
