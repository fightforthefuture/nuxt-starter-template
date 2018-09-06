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
                <a href="#TODO-section-1"
                   @click.prevent="scrollTo('#TODO-section-1')">
                  Link to section 1
                </a>
              </li>
              <li>
                <a href="#TODO-section-2"
                   @click.prevent="scrollTo('#TODO-section-2')">
                  Link to section 2
                </a>
              </li>
            </ul>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="TODO-section-1" class="sml-pad-y3 med-pad-y6 fill-grey-light">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>Section title goes here</h2>
            <p class="sml-push-y2 med-push-y3">
              Body text goes here, lorem ipsum dolor sit amet, consectetur
              adipiscing elit. In nibh libero, venenatis sed justo eu,
              sollicitudin sollicitudin nisi. Integer semper tortor orci,
              id ultricies velit laoreet in. Vestibulum sit amet ante vel risus
              ornare ultrices sed id leo.
            </p>
            <p>
              Body text goes here, lorem ipsum dolor sit amet, consectetur
              adipiscing elit. In nibh libero, venenatis sed justo eu,
              sollicitudin sollicitudin nisi. Integer semper tortor orci,
              id ultricies velit laoreet in. Vestibulum sit amet ante vel risus
              ornare ultrices sed id leo.
            </p>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="TODO-section-2" class="sml-pad-y3 med-pad-y6">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>Section title goes here</h2>
            <p class="sml-push-y2 med-push-y3">
              Body text goes here, lorem ipsum dolor sit amet, consectetur
              adipiscing elit. In nibh libero, venenatis sed justo eu,
              sollicitudin sollicitudin nisi. Integer semper tortor orci,
              id ultricies velit laoreet in. Vestibulum sit amet ante vel risus
              ornare ultrices sed id leo.
            </p>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <SocialSidebar />
  </div>
</template>

<script>
import config from '~/config'
import { createMetaTags, smoothScrollToElement } from '~/assets/js/helpers'
import SocialSidebar from '~/components/SocialSidebar'

export default {
  components: {
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
