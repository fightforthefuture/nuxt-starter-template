<template>
  <div>
    <section class="sml-pad-y3 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h1>Your title goes here</h1>
            <p class="sml-push-y2 med-push-y3">
              Sub heading goes here, lorem ipsum dolor sit amet, consectetur
              adipiscing elit. In nibh libero, venenatis sed justo eu,
              sollicitudin sollicitudin nisi. Integer semper tortor orci,
              id ultricies velit laoreet in. Vestibulum sit amet ante vel risus
              ornare ultrices sed id leo.
            </p>
            <a class="btn btn-block sml-push-y2 med-push-y3" href="#TODO">
              Call to action
            </a>

            <ul class="hoz sml-push-y2 med-push-y3">
              <li>
                <a @click.prevent="scrollTo('#sign')">
                  Sign the petition
                </a>
              </li>
              <li>
                <a @click.prevent="scrollTo('#letter')">
                  Read the Letter
                </a>
              </li>
              <li>
                <a @click.prevent="scrollTo('#print')">
                  Print the Letter
                </a>
              </li>
              <li>
                <a @click.prevent="scrollTo('#quotes')">
                  Quotes
                </a>
              </li>
            </ul>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="sign" class="sml-pad-y3 med-pad-y6 fill-grey-light">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>Sign the petition</h2>
            <ActionNetworkForm/>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="letter" class="sml-pad-y3 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <ReadTheLetter/>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>


    <section id="print" class="sml-pad-y3 med-pad-y6 fill-grey-light">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <PrintTheLetter/>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="quotes" class="sml-pad-y3 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>Quotes</h2>
            <QuoteScroller class="sml-push-y2 med-push-y3" />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="logos" class="sml-pad-y3 med-pad-y6 fill-grey-light">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>Logo Cloud</h2>

            <LogoCloud class="sml-push-y2 med-push-y3"/>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="map" class="sml-pad-y3 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>Map</h2>

            <Map :events="events" class="sml-push-y2 med-push-y3" />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <SocialSidebar />
  </div>
</template>

<script>
import axios from 'axios'
import config from '~/config'
import { createMetaTags, smoothScrollToElement } from '~/assets/js/helpers'
import ActionNetworkForm from '~/components/ActionNetworkForm'
import QuoteScroller from '~/components/QuoteScroller'
import ReadTheLetter from '~/components/ReadTheLetter'
import PrintTheLetter from '~/components/PrintTheLetter'
import LogoCloud from '~/components/LogoCloud'
import Map from '~/components/Map'
import SocialSidebar from '~/components/SocialSidebar'

export default {
  components: {
    ActionNetworkForm,
    QuoteScroller,
    ReadTheLetter,
    PrintTheLetter,
    LogoCloud,
    Map,
    SocialSidebar
  },

  head() {
    return {
      title: config.sharing.title,
      meta: createMetaTags({
        title: config.sharing.title,
        description: config.sharing.description,
        image: config.sharing.image,
        url: config.sharing.url
      })
    }
  },

  async asyncData() {
    let events = []
    try {
      const { data } = await axios.get('https://data.battleforthenet.com/events.json')

      events = data.filter(e => e.category === 'facebook_group').sort((a, b) => {
        if (a.address < b.address) {
          return -1
        }
        else if (a.address > b.address) {
          return 1
        }
        else {
          return 0
        }
      })
    }
    catch (error) {
      //
    }
    return {
      events: events
    }
  },

  methods: {
    scrollTo(hash) {
      const duration = 500
      smoothScrollToElement(hash, duration)
      // WARNING: Since there is no server a setTimeout is ok. However, with a
      // server this is a dangerous eval. Remove if this project ever is hosted
      // with a JS server.
      setTimeout(() => {
        location.hash = hash
      }, duration)
    }
  }
}
</script>
