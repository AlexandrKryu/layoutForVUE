const Feature = Vue.component('article-components',
    {
        data() {
            return {
                findelement: '',
                articles: [
                    {
                        title: "Let’s Get Solution for Building Construction Work",
                        img: "article-img1.jpg",
                        tag: "Kitchen",
                        data: "26 December,2022"
                    },
                    {
                        title: "Design sprints are great",
                        img: "article-img2.jpg",
                        tag: "Kitchen",
                        data: "26 December,2022"
                    },
                    {
                        title: "Let’s Get Solution for Building Construction Work",
                        img: "blog5.jpg",
                        tag: "Living room",
                        data: "22 December,2022"
                    },
                    {
                        title: "Let’s Get Solution for Building Construction Work",
                        img: "blog6.jpg",
                        tag: "Interior Design",
                        data: "25 December,2022"
                    },
                ],
                buttonList: [
                    "Kitchen",
                    "Living room",
                    "Interior Design",
                    "Architecture",
                    "Kitchen Planning",
                    "Bedroom"
                ]
            };
        },

        methods: {
            filterClick(item) {
                this.findelement = item;
            },
        },
        computed: {
            filterArticle() {
                return this.findelement ? this.articles.filter((el) => el.tag.includes(this.findelement)) :
                    this.articles;
            },
        },
        template: `
        <div class="blog-details__wrap center">
           <div class="blog-details">
              <div class="article" v-for="(article, index) in filterArticle" :key="index">
                 <h2 class="article__title">{{ article.title }}</h2>
                 <img class="article__img" :src="'../image/' + article.img" :alt="article.img">
                 <div class="article__info">
                    <p class="article__info-data">{{ article.data }}</p>
                    <p class="article__info-link">Interior / Home / Decore</p>
                 </div>
                 <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
                 <br>
                 <p class="article__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                 <div class="info-blok">
                    <p class="info-blok__quotation-marks">&#8221;</p>
                    <p class="info-blok__text">The details are not the details. They make the design.</p>
                 </div>
                 <h2 class="article__title">Design sprints are great</h2>
                 <p class="article__text"> Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. </p>
                 <div class="article__list">
                    <div class="article__list-num">
                       <p class="article__list-num-text">1</p>
                       <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    </div>
                    <div class="article__list-num">
                       <p class="article__list-num-text">2</p>
                       <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    </div>
                    <div class="article__list-num">
                       <p class="article__list-num-text">3</p>
                       <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div class="tags">
              <div class="tags__buttons-wrap">
                 <h2 class="tags__title">Tags</h2>
                 <div class="tags__buttons">
                    <button v-for="btn in buttonList" @click="filterClick(btn)" class="tags__buttons-item">{{ btn }}</button>
                 </div>
              </div>
           </div>
     
        </div>
        `,
    });


new Vue({
    el: '#blog-details-page',
});