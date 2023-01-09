"use strict";(self.webpackChunkwebpack_boilerplate=self.webpackChunkwebpack_boilerplate||[]).push([[408],{408:(i,s,e)=>{e.r(s),e.d(s,{ip_slider_sl_3:()=>t});var l=e(571);const t=class{constructor(i){(0,l.r)(this,i),this.slides=void 0,this.isSlideBullet=!0,this.isAutoSlide=!0,this.slidePlayIcon=void 0,this.slidePauseIcon=void 0,this.ariaPauseAnimation=void 0,this.ariaPlayAnimation=void 0,this.ariaBulletButton=void 0,this.sliderBullets=[],this.sliderCounts=void 0,this.sliderPosition=0,this.slidesLi=void 0,this.isAutoPlaying=!1,this.isTransitionRunning=!1}arrayDataWatcher(i){this._slides="string"==typeof i?JSON.parse(i):i}componentWillLoad(){this.arrayDataWatcher(this.slides),setTimeout((()=>{this.getSliderInfo(),this.computeBullets(),this.setSliderPosition(this.sliderPosition),this.handleAutoSlide()}),0)}getSliderInfo(){this.sliderCounts=this.el.shadowRoot.querySelectorAll(".slider__li").length,this.slidesLi=this.el.shadowRoot.querySelectorAll(".slider__li")}setSliderPosition(i){if(this.isTransitionRunning)window.clearInterval(this.sliderTimer),this.sliderPosition=i,setTimeout((()=>{this.setSliderPosition(this.sliderPosition),this.handleAutoSlide()}),500);else{this.isTransitionRunning=!0,this.sliderPosition=i,this.slidesLi[i].classList.add("active"),this.slidesLi[i].querySelector("a").setAttribute("tabindex","0");const s=Array.from(this.slidesLi).filter(((i,s)=>s!=this.sliderPosition));setTimeout((()=>{this.slidesLi[i].style.zIndex="0",s.forEach((i=>{i.classList.remove("active"),i.style.zIndex="1",i.querySelector("a").setAttribute("tabindex","-1"),this.isTransitionRunning=!1}))}),500)}}computeBullets(){for(let i=0;i<this.sliderCounts;i++)this.sliderBullets.push(i)}selectSlide(i){this.setSliderPosition(i),window.clearInterval(this.sliderTimer),this.sliderPosition=i,this.handleAutoSlide()}handleAutoSlide(){this.isAutoSlide&&(this.sliderTimer=window.setInterval((()=>{this.sliderPosition<this.sliderCounts-1?this.sliderPosition++:this.sliderPosition=0,this.setSliderPosition(this.sliderPosition)}),3e3))}disconnectedCallback(){window.clearInterval(this.sliderTimer)}playPauseAnimation(){this.el.shadowRoot.querySelector(".slider-play-pause").classList.toggle("play-active"),this.isAutoPlaying=!this.isAutoPlaying,this.isAutoPlaying?window.clearInterval(this.sliderTimer):this.handleAutoSlide()}forceFocus(i,s){"Enter"===s.key&&setTimeout((()=>{this.el.shadowRoot.querySelectorAll(".slider__li")[i].querySelector("a").focus()}),100)}render(){var i,s;return[(0,l.h)("div",{class:"slider",role:"application"},this.isAutoSlide?(0,l.h)("div",{class:"slider-play-pause-container"},(0,l.h)("button",{part:"slider-play-pause",class:"slider-play-pause",onClick:this.playPauseAnimation.bind(this),"aria-label":this.isAutoPlaying?this.ariaPlayAnimation:this.ariaPauseAnimation},(0,l.h)("img",{"aria-hidden":"true",class:"play",src:this.slidePlayIcon,alt:""}),(0,l.h)("img",{"aria-hidden":"true",class:"pause",src:this.slidePauseIcon,alt:""}))):"",(0,l.h)("div",{class:"slider-items"},(0,l.h)("div",{class:"slider-frame",style:{"background-image":`url(${this._slides[0].imgPath})`}}),(0,l.h)("ul",{class:"slider__ul"},null===(i=this._slides)||void 0===i?void 0:i.map((i=>(0,l.h)("li",{class:"slider__li"},(0,l.h)("a",{class:"slider__link",href:i.link,target:"_blank",tabindex:"-1"},(0,l.h)("span",{class:"slider-overlay"}),(0,l.h)("span",{class:"slider__bg",style:{"background-image":`url(${i.imgPath})`}}),(0,l.h)("p",{part:"slider-desc",class:"slider__desc"}," ",i.title," "))))))),this.isSlideBullet?(0,l.h)("div",{part:"slider-bullets",class:"slider-bullets"},(0,l.h)("ul",{class:"slider-bullets__ul"},null===(s=this.sliderBullets)||void 0===s?void 0:s.map((i=>(0,l.h)("li",{class:"slider-bullets__li active"},(0,l.h)("button",{class:this.sliderPosition===i?"btn-active":null,part:this.sliderPosition===i?"bullet-btn bullet-btn-active":"bullet-btn",onClick:this.selectSlide.bind(this,i),onKeyPress:this.forceFocus.bind(this,i),"aria-label":`${this.ariaBulletButton} ${i+1}`})))))):"")]}get el(){return(0,l.g)(this)}static get watchers(){return{slides:["arrayDataWatcher"]}}};t.style=':host{--ip-sl-primary-color:#ffffff;--ip-sl-secondary-color:#2e3243;--ip-sl-font:"Avenir", sans-serif}.slider{position:relative;height:100%}.slider .slider-items{overflow:hidden;height:100%;position:relative}.slider .slider-items .slider__ul{height:100%;list-style-type:none;margin:0;padding:0;display:flex;width:100%}.slider .slider-items .slider__ul .slider__li{width:100%;height:100%;position:absolute;left:0;top:0;transform:translateX(100%);opacity:0}.slider .slider-items .slider__ul .slider__li.active{transition:all 0.5s ease-out;transform:translateX(0%);opacity:1}.slider .slider-items .slider__ul .slider__li .slider__bg{display:block;background-size:cover;width:100%;height:100%}.slider .slider-items .slider__ul .slider__li .slider__desc{position:absolute;top:30px;left:20px;margin:0px;color:var(--ip-sl-primary-color);font-family:var(--ip-acc-font);font-size:16px}.slider .slider-items .slider__ul .slider__li .slider-overlay{position:absolute;top:0;left:0;width:100%;height:100%;display:block;background-color:rgba(0, 0, 0, 0.3)}.slider .slider-items .slider__ul .slider__li .slider__link{display:block;width:100%;height:100%}.slider .slider-items .slider__ul .slider__li .slider__link:focus,.slider .slider-items .slider__ul .slider__li .slider__link:active{outline:2px solid black;outline-offset:-2px}.slider .slider-items .slider-frame{position:absolute;background-size:cover;left:0;top:0;width:100%;height:100%}.slider .slider-bullets{position:absolute;z-index:2;left:50%;transform:translateX(-50%);bottom:22px}.slider .slider-bullets .slider-bullets__ul{display:flex;justify-content:center;gap:10px;padding:0;margin:0;list-style-type:none}.slider .slider-bullets .slider-bullets__ul .slider-bullets__li button{background-color:transparent;border:1px solid var(--ip-sl-primary-color);width:15px;height:15px;padding:0;border-radius:50%;cursor:pointer;transition:background-color 0.3s ease-in}.slider .slider-bullets .slider-bullets__ul .slider-bullets__li button:focus{outline:2px solid black;outline-offset:2px}.slider .slider-bullets .slider-bullets__ul .slider-bullets__li .btn-active{background-color:var(--ip-sl-primary-color);pointer-events:none}.slider .slider-bullets .slider-bullets__ul .slider-bullets__li .btn-transition{background-color:red}.slider .slider-play-pause-container .slider-play-pause{z-index:2;position:absolute;left:20px;bottom:20px;cursor:pointer;background:transparent;border:1px solid white;width:25px;height:25px;border-radius:50%}.slider .slider-play-pause-container .slider-play-pause:focus{outline:2px solid black;outline-offset:2px}.slider .slider-play-pause-container .slider-play-pause img{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);display:block;width:12px;height:12px;transition:opacity 0.3s ease-in-out}.slider .slider-play-pause-container .slider-play-pause.play-active .play{opacity:1}.slider .slider-play-pause-container .slider-play-pause.play-active .pause{opacity:0}.slider .slider-play-pause-container .slider-play-pause .play{opacity:0}'}}]);