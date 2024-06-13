<template>
  <div class="body">
    <Head>
      <Title>
        {{ tour_package.no_of_days }}-{{ tour_package.title }} | Grizzpicssafari
        | The Best Safaris In Tanzania
      </Title>
      <Meta name="description" :content="tour_package.description" />
      <Meta
        property="og:image"
        :content="'https://api.grizzpicssafari.com/' + tour_package.image_url"
      />
    </Head>
    <NavigationComponent />
    <section class="py-5 mt-5 container">
      <div class="package-inner-banner">
        <div
          class="package-inner-image"
          :style="
            'background-image: url(https://api.grizzpicssafari.com/' +
            tour_package.image_url +
            ');'
          "
        >
          <div class="tour-title-card">
            <h1 class="tour-title serif" itemprop="name">
              {{ tour_package.no_of_days }}-{{ tour_package.title }}
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 container">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <nav class="nav_tabs mb-3">
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Summary
                </button>
                <button
                  class="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Itinerary
                </button>
                <button
                  class="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Gallery
                </button>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent" v-if="!loading">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabindex="0"
              >
                <div class="px-3 px-md-5">
                  <h4 class="fw-bold mt-3">Overview</h4>
                  <div class="overview-description">
                    <p
                      style="text-align: justify"
                      v-html="tour_package.description"
                    ></p>
                  </div>
                  <div class="d-flex mt-5 s-heading">
                    <!-- <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='24' fill='%235e0302'%3E%3Cpath d='M14.5 9h-9a.75.75 0 000 1.5h9a.75.75 0 100-1.5zm.75 4.249a.75.75 0 00-.75-.75h-9a.75.75 0 100 1.5h9a.75.75 0 00.75-.75zM8 6.5h4a1 1 0 001-1V3A3.006 3.006 0 009.192.107 3.045 3.045 0 007 3.087V5.5a1 1 0 001 1zm1.25-3.75a.75.75 0 11.057.286.75.75 0 01-.057-.287v.001z'/%3E%3Cpath d='M17.5 3h-2.75a.25.25 0 00-.25.25v1.5a.25.25 0 00.25.25H17a.5.5 0 01.5.5v12.792a.5.5 0 01-.146.354l-3.208 3.207a.5.5 0 01-.353.146H3a.5.5 0 01-.5-.5V5.5A.5.5 0 013 5h2.25a.25.25 0 00.25-.25v-1.5A.25.25 0 005.25 3H2.5a2 2 0 00-2 2v17a2 2 0 002 2h15a2 2 0 002-2V5a2 2 0 00-2-2z'/%3E%3Cpath d='M5.5 16a.75.75 0 100 1.5h3.75a.75.75 0 100-1.5H5.5z'/%3E%3C/svg%3E"
                      width="24"
                      height="24"
                      alt="icon"
                      class="me-2"
                    /> -->
                    <h4 class="fw-bold our-color flex-shrink-0">
                      Tour Summary
                    </h4>
                    <!-- <div class="horizontal-grayline"></div> -->
                  </div>
                  <div>
                    <div
                      class="routine mb-4"
                      v-for="day in tour_package.package_days"
                      :key="day.id"
                    >
                      <h6 class="fw-bold mt-4 py-3 sum-day">
                        Day {{ day.day_no }}
                      </h6>
                      <ul class="position-relative">
                        <li class="include">
                          <p>
                            Destination:
                            <strong>{{ day.destination }}</strong>
                          </p>
                        </li>
                        <li class="include">
                          <p>
                            Accomodation:
                            <strong>{{ day.accommodation_name }}</strong>
                          </p>
                        </li>
                        <!---->
                        <li
                          class="include"
                          v-if="day.package_day_accommodation_location"
                        >
                          <p>
                            Location:
                            <strong>
                              {{ day.package_day_accommodation_location.title }}
                            </strong>
                          </p>
                        </li>
                        <li
                          class="include"
                          v-if="day.package_day_accommodation_level"
                        >
                          <p>
                            Focus:
                            <strong>{{
                              day.package_day_accommodation_level.title
                            }}</strong
                            >&nbsp;
                            <strong>{{
                              day.package_day_accommodation_type.title
                            }}</strong>
                          </p>
                        </li>
                        <li class="include" v-if="day.package_day_meals.length">
                          <p>
                            Meals:
                            <strong
                              v-for="(meal, index) in day.package_day_meals"
                              :key="meal.id"
                              >{{ meal.package_day_meals.title }}
                              <span
                                v-if="index < day.package_day_meals.length - 1"
                                >,</span
                              >
                            </strong>
                            <span> . </span>
                          </p>
                        </li>
                        <!-- <li class="include">
                          <p>
                            Drinks:
                            <strong>Water, </strong>
                            <span
                              style="
                                width: 20px;
                                display: inline-block;
                                background: white;
                                margin-left: -8.5px;
                                color: white;
                              "
                            >
                              .
                            </span>
                          </p>
                        </li> -->
                      </ul>
                    </div>
                  </div>
                  <!-- Activities and Transportation -->
                  <div class="d-flex mt-5 s-heading">
                    <!-- <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='24' fill='%235e0302'%3E%3Cpath d='M14.5 9h-9a.75.75 0 000 1.5h9a.75.75 0 100-1.5zm.75 4.249a.75.75 0 00-.75-.75h-9a.75.75 0 100 1.5h9a.75.75 0 00.75-.75zM8 6.5h4a1 1 0 001-1V3A3.006 3.006 0 009.192.107 3.045 3.045 0 007 3.087V5.5a1 1 0 001 1zm1.25-3.75a.75.75 0 11.057.286.75.75 0 01-.057-.287v.001z'/%3E%3Cpath d='M17.5 3h-2.75a.25.25 0 00-.25.25v1.5a.25.25 0 00.25.25H17a.5.5 0 01.5.5v12.792a.5.5 0 01-.146.354l-3.208 3.207a.5.5 0 01-.353.146H3a.5.5 0 01-.5-.5V5.5A.5.5 0 013 5h2.25a.25.25 0 00.25-.25v-1.5A.25.25 0 005.25 3H2.5a2 2 0 00-2 2v17a2 2 0 002 2h15a2 2 0 002-2V5a2 2 0 00-2-2z'/%3E%3Cpath d='M5.5 16a.75.75 0 100 1.5h3.75a.75.75 0 100-1.5H5.5z'/%3E%3C/svg%3E"
                      width="24"
                      height="24"
                      alt="icon"
                      class="me-2"
                    /> -->
                    <h4 class="fw-bold our-color flex-shrink-0">
                      Activities and Transportation
                    </h4>
                    <!-- <div class="horizontal-grayline"></div> -->
                  </div>
                  <ul>
                    <li class="include">
                      <p>
                        Activitiy:
                        <strong
                          v-for="(
                            activity, index
                          ) in tour_package.package_activities"
                          :key="activity.id"
                        >
                          {{ activity.tour_activities.title }}
                          <span
                            v-if="
                              index < tour_package.package_activities.length - 1
                            "
                            >,</span
                          >
                        </strong>
                      </p>
                    </li>
                    <li class="include">
                      <p>
                        Getting around:
                        <strong
                          v-for="(
                            transport, index
                          ) in tour_package.package_transport"
                          :key="transport.id"
                        >
                          {{ transport.tour_transports.title }}
                          <span
                            v-if="
                              index < tour_package.package_transport.length - 1
                            "
                            >,</span
                          >
                        </strong>
                      </p>
                    </li>
                  </ul>

                  <!-- Getting There -->
                  <div class="d-flex mt-5 s-heading">
                    <!-- <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='24' fill='%235e0302'%3E%3Cpath d='M14.5 9h-9a.75.75 0 000 1.5h9a.75.75 0 100-1.5zm.75 4.249a.75.75 0 00-.75-.75h-9a.75.75 0 100 1.5h9a.75.75 0 00.75-.75zM8 6.5h4a1 1 0 001-1V3A3.006 3.006 0 009.192.107 3.045 3.045 0 007 3.087V5.5a1 1 0 001 1zm1.25-3.75a.75.75 0 11.057.286.75.75 0 01-.057-.287v.001z'/%3E%3Cpath d='M17.5 3h-2.75a.25.25 0 00-.25.25v1.5a.25.25 0 00.25.25H17a.5.5 0 01.5.5v12.792a.5.5 0 01-.146.354l-3.208 3.207a.5.5 0 01-.353.146H3a.5.5 0 01-.5-.5V5.5A.5.5 0 013 5h2.25a.25.25 0 00.25-.25v-1.5A.25.25 0 005.25 3H2.5a2 2 0 00-2 2v17a2 2 0 002 2h15a2 2 0 002-2V5a2 2 0 00-2-2z'/%3E%3Cpath d='M5.5 16a.75.75 0 100 1.5h3.75a.75.75 0 100-1.5H5.5z'/%3E%3C/svg%3E"
                      width="24"
                      height="24"
                      alt="icon"
                      class="me-2"
                    /> -->
                    <h4 class="fw-bold our-color flex-shrink-0">
                      Getting There
                    </h4>
                    <!-- {{ tour_package.package_getting_there.airport_transfer }} -->
                    <!-- <div class="horizontal-grayline"></div> -->
                  </div>
                  <ul>
                    <li
                      class="include"
                      v-if="
                        parseInt(
                          tour_package.package_getting_there.airport_transfer
                        )
                      "
                    >
                      <p>Airport transfer are included</p>
                    </li>
                    <li class="include">
                      <p>
                        The best and closest international airport to land is
                        <strong class="text-capitalize">arusha airport</strong>
                      </p>
                    </li>
                    <li class="include">
                      <p>
                        We can help clients book local flights but not
                        international flights.
                      </p>
                    </li>
                    <li
                      class="include"
                      v-if="
                        parseInt(
                          tour_package.package_getting_there
                            .accommodation_before_after
                        )
                      "
                    >
                      <p>
                        Accommodation before safari is included. (after safari,
                        accommodation can be arranged at an extra cost).
                      </p>
                    </li>
                  </ul>
                  <!-- Inclusions -->
                  <div class="d-flex mt-5 s-heading">
                    <!-- <img
                      src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='24' fill='%235e0302'%3E%3Cpath d='M14.5 9h-9a.75.75 0 000 1.5h9a.75.75 0 100-1.5zm.75 4.249a.75.75 0 00-.75-.75h-9a.75.75 0 100 1.5h9a.75.75 0 00.75-.75zM8 6.5h4a1 1 0 001-1V3A3.006 3.006 0 009.192.107 3.045 3.045 0 007 3.087V5.5a1 1 0 001 1zm1.25-3.75a.75.75 0 11.057.286.75.75 0 01-.057-.287v.001z'/%3E%3Cpath d='M17.5 3h-2.75a.25.25 0 00-.25.25v1.5a.25.25 0 00.25.25H17a.5.5 0 01.5.5v12.792a.5.5 0 01-.146.354l-3.208 3.207a.5.5 0 01-.353.146H3a.5.5 0 01-.5-.5V5.5A.5.5 0 013 5h2.25a.25.25 0 00.25-.25v-1.5A.25.25 0 005.25 3H2.5a2 2 0 00-2 2v17a2 2 0 002 2h15a2 2 0 002-2V5a2 2 0 00-2-2z'/%3E%3Cpath d='M5.5 16a.75.75 0 100 1.5h3.75a.75.75 0 100-1.5H5.5z'/%3E%3C/svg%3E"
                      width="24"
                      height="24"
                      alt="icon"
                      class="me-2"
                    /> -->
                    <h4 class="fw-bold our-color flex-shrink-0">Inclusions</h4>
                    <!-- <div class="horizontal-grayline"></div> -->
                  </div>
                  <div class="row g-0">
                    <div class="col-md-6 col-sm-12">
                      <h6 class="fw-bold ms-2 mt-5">Included</h6>
                      <ul>
                        <li
                          class="include"
                          v-for="inclusion in tour_package.package_inclusions"
                          :key="inclusion.id"
                        >
                          <p>{{ inclusion.tour_notes.title }}</p>
                        </li>
                      </ul>
                    </div>
                    <!-- <div class="col-md-6 col-sm-12">
                      <h6 class="fw-bold ms-2 mt-5">Excluded</h6>
                      <ul>
                        <li class="exclude">
                          <p>All flights during the tour</p>
                        </li>
                        <li class="exclude"><p>Bath towels</p></li>
                        <li class="exclude">
                          <p>
                            Government revised increase of taxes and park fees
                          </p>
                        </li>
                        <li class="exclude"><p>Hot air balloon safari</p></li>
                        <li class="exclude">
                          <p>Personal Items and services</p>
                        </li>
                        <li class="exclude"><p>Rental vehicle</p></li>
                        <li class="exclude"><p>Tips</p></li>
                        <li class="exclude"><p>Travel Insurance</p></li>
                        <li class="exclude"><p>Visa</p></li>
                        <li class="exclude" data-v-a8f429de="">
                          <p data-v-a8f429de="">
                            Tipping <span data-v-a8f429de="">ℹ️</span>
                          </p>
                        </li>
                      </ul>
                    </div> -->
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade px-3 px-md-5"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                tabindex="0"
              >
                <div v-for="day in tour_package.package_days" :key="day.id">
                  <div class="itinery mt-5">
                    <div class="itinery-title mb-3">
                      <h5 class="fw-bold our-color">Day {{ day.day_no }}</h5>
                      <h5 class="fw-bold my-0">{{ day.title }}</h5>
                    </div>
                  </div>
                  <div>
                    <img
                      class="w-100"
                      :data-src="
                        'https://api.grizzpicssafari.com/' + day.image_url
                      "
                      :src="'https://api.grizzpicssafari.com/' + day.image_url"
                      lazy="loaded"
                      :alt="day.title"
                    />
                  </div>
                  <div class="my-3">
                    <div class="itinery-content">
                      <p
                        style="text-align: justify"
                        v-html="day.day_description"
                      ></p>
                    </div>
                  </div>
                  <div class="mt-5 mb-0 position-relative">
                    <div class="fw-bold mb-2 d-flex align-items-center">
                      <!-- <img
                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%235e0302' width='24' height='16'%3E%3Cpath d='M5 9.5a2 2 0 100-4 2 2 0 000 4zm4 0h10.667a.833.833 0 00.623-1.386C18.233 5.8 14.1 4.372 9.309 4.51a.833.833 0 00-.809.832V9a.5.5 0 00.5.5z'/%3E%3Cpath d='M23 3.75a1 1 0 00-1 1v5.5a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-8.5a1 1 0 00-2 0v12.5a1 1 0 102 0v-1a.5.5 0 01.5-.5h19a.5.5 0 01.5.5v1a1 1 0 002 0v-9.5a1 1 0 00-1-1z'/%3E%3C/svg%3E"
                        width="24"
                      /> -->
                      <span class="ms-2"> Accommodation: </span> <span></span>
                    </div>
                    <ul>
                      <li class="include">
                        <p>
                          Accomodation:
                          <strong v-if="day.accommodation_name">{{
                            day.accommodation_name
                          }}</strong>
                          <strong v-else>No accommodation</strong>
                        </p>
                      </li>
                      <li class="include" v-if="day.accommodation_name">
                        Name: <strong>{{ day.accommodation_name }}</strong>
                      </li>
                      <li
                        class="include"
                        v-if="day.package_day_accommodation_level"
                      >
                        Standard:
                        <strong class="text-capitalize">
                          {{
                            day.package_day_accommodation_level.title
                          }}&nbsp;{{
                            day.package_day_accommodation_type.title
                          }}&nbsp;</strong
                        >
                      </li>
                      <!---->
                    </ul>
                  </div>
                  <div class="mt-4 meal">
                    <div
                      class="mb-2 fw-bold d-flex align-items-center meal ps-1"
                    >
                      <!-- <img
                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%235e0302' width='18' height='24'%3E%3Cpath fill='%235e0302' d='M12.5 0a.75.75 0 00-.75.75V23a1 1 0 002 0v-8a.5.5 0 01.5-.5H16a1.244 1.244 0 001.25-1.25v-.007C17.186 6.055 14.832 0 12.5 0zM7.75 0a1 1 0 00-1 1v5c0 .524-.204 1.026-.571 1.4a.251.251 0 01-.429-.175V1a1 1 0 00-2 0v6.223a.251.251 0 01-.429.175A1.993 1.993 0 012.75 6V1a1 1 0 00-2 0v5a4.009 4.009 0 002.667 3.772.5.5 0 01.333.471V23a1 1 0 102 0V10.243a.5.5 0 01.333-.471A4.009 4.009 0 008.75 6V1a1 1 0 00-1-1z'/%3E%3C/svg%3E"
                        height="24"
                      /> -->
                      <span data-v-69f9f8d2="" class="ms-2"
                        >Meals &amp; Drinks:
                      </span>
                      <!---->
                    </div>
                    <ul>
                      <li class="include">
                        <span>Meals:</span>
                        <strong
                          v-for="(meal, index) in day.package_day_meals"
                          :key="meal.id"
                          >{{ meal.package_day_meals.title
                          }}<span
                            v-if="index < day.package_day_meals.length - 1"
                            >,
                          </span>
                        </strong>
                        <span
                          style="
                            width: 20px;
                            display: inline-block;
                            color: white;
                          "
                        >
                          .
                        </span>
                      </li>
                      <!-- <li class="include">
                        <span>Drinks:</span>
                        <strong>Water, </strong>
                        <span
                          style="
                            width: 20px;
                            display: inline-block;
                            background: white;
                            margin-left: -8.5px;
                            color: white;
                          "
                        >
                          .
                        </span>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
                tabindex="0"
              >
                <div class="px-3 px-md-5" v-if="!loading">
                  <PackageGallery
                    :package_gallery="tour_package.package_gallery"
                  />
                </div>
              </div>
            </div>
            <div v-else>
              <SpinnerComponent />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card quote_card">
            <div class="card-title title mt-3">
              <strong>
                <h1 class="text-success" v-if="tour_package.alternative_price">
                  <del> $ {{ formatPrice(tour_package.price) }} </del>
                  $ {{ formatPrice(tour_package.alternative_price) }}
                </h1>
                <h1 class="text-success" v-else>
                  $ {{ formatPrice(tour_package.price) }}
                </h1>
              </strong>
            </div>
            <div class="card-body">
              <h3>Request a Quote</h3>
              <div class="form-group">
                <label for="name">Full Name</label>
                <input
                  type="text"
                  id=""
                  v-model="quote.full_name"
                  class="form-control"
                />
                <div
                  v-if="errors.full_name"
                  v-html="errors.full_name[0]"
                  style="color: red"
                />
              </div>
              <div class="form-group">
                <label for="name">Email</label>
                <input
                  type="email"
                  id=""
                  v-model="quote.email"
                  class="form-control"
                />
                <div
                  v-if="errors.email"
                  v-html="errors.email[0]"
                  style="color: red"
                />
              </div>
              <div class="form-group">
                <label for="name">Phone</label>
                <input
                  type="text"
                  id=""
                  v-model="quote.phone_number"
                  class="form-control"
                />
                <div
                  v-if="errors.phone_number"
                  v-html="errors.phone_number[0]"
                  style="color: red"
                />
              </div>
              <div class="form-group">
                <label for="name">Adult</label>
                <input
                  type="number"
                  id=""
                  v-model="quote.adult"
                  class="form-control"
                />
                <div
                  v-if="errors.adult"
                  v-html="errors.adult[0]"
                  style="color: red"
                />
              </div>
              <div class="form-group">
                <label for="name">Children</label>
                <input
                  type="number"
                  id=""
                  v-model="quote.children"
                  class="form-control"
                />
                <div
                  v-if="errors.children"
                  v-html="errors.children[0]"
                  style="color: red"
                />
              </div>
              <div class="form-group">
                <label for="name">Description</label>
                <textarea
                  class="form-control"
                  v-model="quote.description"
                ></textarea>
                <div
                  v-if="errors.description"
                  v-html="errors.description[0]"
                  style="color: red"
                />
              </div>
              <div class="form-group mt-4">
                <button class="btn btn-brown btn-block" @click="request_quote">
                  <div
                    class="spinner-border"
                    role="status"
                    v-if="quote_loading"
                  ></div>
                  <div v-else>Submit</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-4">
      <FooterComponent />
    </section>
  </div>
</template>

<script>
import NavigationComponent from "../../components/NavigationComponent.vue";
import PackageGallery from "../../components/PackageGallery.vue";
import FooterComponent from "../../components/FooterComponent.vue";
import SpinnerComponent from "../../components/preloaders/SpinnerComponent.vue";
import axios from "axios";
import swal from "sweetalert";

export default {
  components: {
    NavigationComponent,
    PackageGallery,
    SpinnerComponent,
    FooterComponent,
  },
  data: () => ({
    quote_loading: false,
    loading: true,
    errors: [],
    package_id: null,
    tour_package: {},
    quote: {
      package_id: null,
      full_name: "",
      email: "",
      phone_number: "",
      description: "",
      adult: 2,
      children: 1,
    },
    title: "",
    description: "",
    image_url: "",
  }),
  methods: {
    get_package() {
      axios
        .get("https://api.grizzpicssafari.com/api/package/" + this.package_id)
        .then((response) => {
          this.tour_package = response.data;
          this.loading = false;
        })
        .catch((error) => {
          swal("Oops...!", "Something went wrong, please try again!", "error");
          return error;
        });
    },
    request_quote() {
      this.quote_loading = true;
      axios
        .post(
          "https://api.grizzpicssafari.com/api/" + "quote_request",
          this.quote
        )
        .then((response) => {
          if (response.data[0] == 200) {
            swal(
              "Thank you!",
              "We have received your request, we will contact you soon!",
              "success"
            );
            this.quote_loading = false;
            this.quote.full_name = "";
            this.quote.email = "";
            this.quote.phone_number = "";
            this.quote.description = "";
            this.quote.adult = 2;
            this.quote.children = 1;
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.quote_loading = false;
          swal("Oops...!", "Something went wrong, please try again!", "error");
          return error;
        });
    },
    formatPrice(price) {
      return new Intl.NumberFormat().format(price);
    },
  },
  created() {
    const route = useRoute();
    this.quote.package_id = route.params.package;
    this.package_id = route.params.package;
    this.get_package();
  },
  // head() {
  //   return {
  //     title:
  //       "%s" +
  //       this.tour_package.no_of_days +
  //       "-" +
  //       this.tour_package.title +
  //       " | Grizzpicssafari | The Best Safaris In Tanzania",
  //     meta: [
  //       {
  //         hid: "inner-image",
  //         property: "og:image",
  //         content:
  //           "%s - https://api.grizzpicssafari.com/" +
  //           this.tour_package.image_url,
  //       },
  //       {
  //         hid: "package-description",
  //         name: "description",
  //         content: this.tour_package.description + "%s",
  //       },
  //     ],
  //   };
  // },
  // metaInfo() {
  //   return {
  //     title: `${
  //       this.tour_package.no_of_days + "-" + this.tour_package.title
  //     } | Grizzpicssafari | The Best Safaris In Tanzania`,
  //     meta: [
  //       {
  //         property: "og:image",
  //         content:
  //           "https://api.grizzpicssafari.com/" + this.tour_package.image_url,
  //       },
  //       {
  //         name: "description",
  //         content: this.tour_package.description,
  //       },
  //     ],
  //   };
  // },
};
</script>

<style scoped>
.body {
  font-family: "Gentium Basic", serif;
}
/* .package-inner-banner { */
/* height: 259px; */
/* height: 25rem; */
/* } */
.package-inner-image {
  position: relative;
  /* height: 0; */
  height: 25rem;
  width: 100%;
  /* padding-top: 45%; */
  background-repeat: no-repeat;
  background-size: cover !important;
  background-position: 50% !important;
  /* background-position: center; */
  /* border-radius: 10px; */
  /* background-color: #c9c9c9; */
  background: rgba(0, 0, 0, 0.4);
  background: linear-gradient(
    to right,
    rgb(0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 45%,
    rgba(0, 0, 0, 0) 80%
  );
}

/* .package-inner-image:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
} */

.tour-title {
  font-size: 2.375rem;
  line-height: 2.5rem;
}

.serif {
  font-family: "Gentium Basic", serif;
}

.tour-title-card {
  width: 100%;
  height: auto;
  position: absolute;
  display: block;
  left: 0;
  bottom: 0;
  text-shadow: 1px 1px 5px #000;
  padding: 3.75rem 1.25rem 0.9375rem;
  z-index: 3;
  color: #fff;
  /* -webkit-print-color-adjust: exact;
  print-color-adjust: exact; */
}

@media (min-width: 970px) {
  .tour-title-card {
    padding-left: 2.1875rem;
  }
}

@media (min-width: 744px) {
  .tour-title-card {
    width: 50%;
    height: auto;
    bottom: 0.9375rem;
    padding: 0 1.25rem 0.9375rem 1.5625rem;
  }
}

.nav_tabs {
  background-color: #846644;
}

.nav_tabs nav-tabs nav-link {
  font-size: 16px;
  font-weight: 400;
  margin: 3rem;
}

.nav-tabs .nav-link {
  border-radius: 0;
  color: #000;
  font-family: "Gentium Basic", serif;
}
.nav-link.active {
  color: #3f230b;
  border-color: #adadad;
  background: #adadad;
  border-radius: 0;
  font-size: 20px;
  font-weight: 500;
}

.card {
  border-radius: 0;
}

.title {
  /* margin-left: -1.25rem;
  margin-right: -1.25rem; */
  padding: 0 1.25rem 0.9375rem;
  border-bottom: 0.0625rem solid #d9d9d9;
  position: relative;
}

.title strong {
  padding-top: 0.25rem;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
}
.title strong h1 {
  line-height: 2rem;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: 0.03125rem;
}

.our-color {
  color: #3f230b;
}

ul li {
  list-style: none;
  font-size: 16px;
  position: relative;
  margin-bottom: 5px;
}

li {
  list-style: none;
}
li,
p {
  line-height: 1.5 !important;
  /* font-weight: 300; */
}

ul li.exclude:before,
ul li.include:before {
  display: inline-block;
  width: 1.5em;
  top: 2px;
  left: -23px;
  position: absolute;
}
ul li.include:before {
  content: "✓";
  color: #3f230b;
}

.quote_card {
  position: sticky;
  top: 12%;
}

.btn-brown {
  background: #3f230b;
  color: #fff;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #3f230b;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #846644;
}

.btn-block {
  width: 100%;
}
</style>
