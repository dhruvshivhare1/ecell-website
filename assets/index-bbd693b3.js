import{r as o,u as A,j as e,L as j,X as D,B as P,A as y,m as r,F as M,a as F,b as W,c as R,d as z,e as C,C as I,f as T,g as L,h as U,i as _,_ as B,T as H,S as Y,U as q,k as G,R as K,l as k,n as X,o as $,p as Q}from"./vendor-1dfd7f2e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const O="/assets/E-cell-7b4dd9cd.png",S=[{name:"Home",href:"/#home"},{name:"About",href:"/#about"},{name:"Events",href:"/#events"},{name:"Achievements",href:"/#achievements"},{name:"Newsletter",href:"/#newsletter"},{name:"Guest Speakers",href:"/#speakers"}];function J(){const[t,s]=o.useState(!1),a=A(),l=i=>{if(a.pathname!=="/"){window.location.href=`/${i}`;return}const n=document.querySelector(i);n&&n.scrollIntoView({behavior:"smooth"}),s(!1)};return o.useEffect(()=>{if(a.hash){const i=a.hash,n=document.querySelector(i);n&&n.scrollIntoView({behavior:"smooth"})}},[a]),e.jsxs("header",{className:"fixed w-full z-50 bg-transparent",children:[e.jsxs("nav",{className:"container mx-auto px-4 flex items-center justify-between py-4",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(j,{to:"/",className:"flex items-center text-2xl font-heading font-bold text-white hover:text-primary transition-colors",children:e.jsx("img",{src:O,alt:"E-Cell Logo",className:"h-16 w-auto mr-3"})})}),e.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[S.map(i=>e.jsx("button",{onClick:()=>l(i.href.replace("/","")),className:"text-white hover:text-primary transition-colors",children:i.name},i.name)),e.jsx(j,{to:"/team",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:"Team"})]}),e.jsx("button",{type:"button",className:"md:hidden p-2 text-white hover:text-primary",onClick:()=>s(!t),children:t?e.jsx(D,{className:"h-6 w-6"}):e.jsx(P,{className:"h-6 w-6"})})]}),e.jsx(y,{children:t&&e.jsx(r.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"md:hidden",children:e.jsxs("div",{className:"container mx-auto px-4 py-4 space-y-4 bg-transparent",children:[S.map(i=>e.jsx("button",{onClick:()=>l(i.href.replace("/","")),className:"block w-full text-left text-white hover:text-primary transition-colors",children:i.name},i.name)),e.jsx(j,{to:"/team",target:"_blank",rel:"noopener noreferrer",className:"block btn btn-primary text-center",onClick:()=>s(!1),children:"Team"})]})})})]})}const Z=[{icon:W,href:"https://www.linkedin.com/company/ecell-sac",color:"#0077B5"},{icon:R,href:"https://www.instagram.com/ecell_sac/",color:"#E1306C"},{icon:z,href:"https://www.instagram.com/ecell_sac/",color:"#1DA1F2"},{icon:C,href:"https://www.youtube.com/@E-CellSACUniversityOfDelhi",color:"#4267B2"}],ee=[{name:"Home",href:"/#home"},{name:"About",href:"/#about"},{name:"Events",href:"/#events"},{name:"Team",href:"/team"},{name:"Achievements",href:"/#achievements"}];function te(){const t=s=>{const a=document.querySelector(s);a&&a.scrollIntoView({behavior:"smooth"})};return e.jsxs("footer",{className:"bg-dark-100 text-light py-16",children:[e.jsxs("div",{className:"container mx-auto px-4 grid md:grid-cols-3 gap-12",children:[e.jsxs(r.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[e.jsxs("div",{className:"flex flex-col items-center mb-8",children:[e.jsx(j,{to:"/",className:"flex items-center text-2xl font-heading font-bold text-white hover:text-primary transition-colors mb-4",children:e.jsx("img",{src:O,alt:"E-Cell Logo",className:"h-20 w-auto"})}),e.jsx("p",{className:"text-gray-400 text-center max-w-xl",children:"Empowering entrepreneurship through innovation, mentorship, and transformative experiences."})]}),e.jsx("div",{className:"flex space-x-4",children:Z.map((s,a)=>e.jsx(r.a,{href:s.href,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},whileHover:{scale:1.1},transition:{duration:.3,delay:a*.1},className:"text-2xl hover:opacity-80 transition-all",style:{color:s.color},children:e.jsx(s.icon,{})},s.href))})]}),e.jsxs(r.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},children:[e.jsx("h3",{className:"text-xl font-bold mb-6",children:"Quick Links"}),e.jsx("div",{className:"grid grid-cols-2 gap-4",children:ee.map(s=>e.jsx("button",{onClick:()=>{s.href.startsWith("/#")?t(s.href.replace("/","")):window.location.href=s.href},className:"text-light-50 hover:text-primary text-left transition-colors",children:s.name},s.name))})]}),e.jsxs(r.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},children:[e.jsx("h3",{className:"text-xl font-bold mb-6",children:"Contact Us"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(M,{className:"text-primary"}),e.jsx("a",{href:"mailto:contact@ecell.org",className:"text-light-50 hover:text-white",children:"contact@ecellsac.in"})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(F,{className:"text-primary"}),e.jsx("a",{href:"tel:+919119035011",className:"text-light-50 hover:text-white",children:"+91 91190 35011"})]})]})]})]}),e.jsx(r.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6,delay:.6},className:"container mx-auto px-4 mt-12 pt-6 border-t border-dark-50 text-center",children:e.jsxs("p",{className:"text-light-50",children:[new Date().getFullYear()," E-Cell-SAC. All Rights Reserved.",e.jsx("br",{}),"Designed with by the E-Cell-SAC Team"]})})]})}const se="/assets/team-cover-2840aa97.jpg";function ie(){return e.jsxs("section",{className:"relative h-screen flex items-center justify-center overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0",children:e.jsx("img",{src:se,alt:"E-Cell Team",className:"w-full h-full object-cover opacity-70",onError:t=>{const s=t.target;s.src="/fallback-image.png"}})}),e.jsx("div",{className:"absolute inset-0 bg-black/20"}),e.jsx("div",{className:"container relative z-10 text-center",children:e.jsxs(r.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"space-y-8",children:[e.jsxs("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white",children:["Welcome to ",e.jsx("span",{className:"text-primary",children:"E-Cell"})]}),e.jsx("p",{className:"text-xl md:text-2xl text-white max-w-4xl mx-auto font-medium tracking-wide leading-relaxed",children:"Where Dreams Become Venture"})]})}),e.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:e.jsx("div",{className:"absolute w-96 h-96 bg-primary/20 rounded-full -top-20 -right-20 blur-3xl animate-pulse"})})]})}function ae(){return e.jsx("section",{id:"about",className:"section-padding bg-dark-100",children:e.jsx("div",{className:"container",children:e.jsxs(r.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"max-w-4xl mx-auto text-center",children:[e.jsxs("h2",{className:"text-3xl md:text-4xl font-heading font-bold mb-6",children:["About ",e.jsx("span",{className:"text-primary",children:"E-Cell"})]}),e.jsx("p",{className:"text-light-50 text-xl mb-8 leading-relaxed",children:"The Entrepreneurship Cell (E-Cell),Sri Aurobindo College is a student-run organization dedicated to promoting the spirit of entrepreneurship among students. We believe in fostering innovation, creativity, and an entrepreneurial mindset through various activities and initiatives."}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-8 mb-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-primary mb-4",children:"50+"}),e.jsx("p",{className:"text-light-50",children:"Events Organized"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-primary mb-4",children:"100+"}),e.jsx("p",{className:"text-light-50",children:"Student Reached"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold text-primary mb-4",children:"30+"}),e.jsx("p",{className:"text-light-50",children:"awards Won"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Our Mission"}),e.jsx("p",{className:"text-light-50 text-lg leading-relaxed",children:"Our mission is to equip students with entrepreneurial skills, foster innovation, and develop ethical leaders. Through resources, workshops, and mentorship, we support collaboration and creativity, empowering the next generation of entrepreneurs to drive innovation and growth."})]})]})})})}const ne="/assets/Entricon-f4ad6c29.png",re="/assets/ori-38bb6666.jpeg",le="/assets/orientation-d9d203b8.jpg",oe="/assets/womensday-7f4ae69c.png",ce="/assets/NSIC-a5d5b75c.png",de="/assets/VisionEx-1499b924.png",p=[{id:1,title:"Entricon",description:"The annual flagship event of the Entrepreneurship Cell aims to inspire and empower students by connecting them with industry experts and emerging startups, fostering entrepreneurial spirit and learning.",image:ne,fullDescription:"Entricon is our premier annual event designed to bridge the gap between aspiring entrepreneurs and the dynamic world of startups. This comprehensive event brings together industry leaders, successful entrepreneurs, and passionate students to create a vibrant ecosystem of innovation and learning."},{id:2,title:"Orientation Program",description:"The E-Cell hosted an inspiring orientation, igniting entrepreneurial passion among students. The event showcased the E-Cell's vision, upcoming opportunities, and success stories, motivating students to embark on their journey of innovation and leadership.",image:re,fullDescription:"Our annual Orientation Program is a transformative event that introduces students to the exciting world of entrepreneurship. Through engaging presentations, interactive sessions, and inspiring talks, we aim to kindle the entrepreneurial spirit and provide a roadmap for innovation and leadership."},{id:3,title:"Induction Ceremony",description:"On 14th November, the E-Cell welcomed new members with engaging introductions, interactive activities, and team-building sessions. The event was filled with energy, fun, and the promise of an exciting journey ahead. ",image:le,fullDescription:" On 14th November, the E-Cell welcomed new members with engaging introductions, interactive activities, and team-building sessions. The event was filled with energy, fun, and the promise of an exciting journey ahead."},{id:4,title:"World Entrepreneurship Day",description:"Organized an impactful event featuring esteemed entrepreneurs Jitender Girdhar, Vaneeta Aggarwal, and Shubham Maheshwari, celebrating entrepreneurial achievements and sharing valuable insights. ",image:oe,fullDescription:"Our Women's Day Celebration is a powerful event dedicated to highlighting and empowering women entrepreneurs. Through inspiring talks, panel discussions, and networking opportunities, we aim to break barriers and showcase the incredible potential of women in entrepreneurship."},{id:5,title:"NSIC Okhla Visit",description:"On November 30, 2023, E Cell visited the National Small Industries Corporation, gaining practical exposure to entrepreneurship operations and small-business insights. ",image:ce,fullDescription:"On November 30, 2023, the E-Cell embarked on an insightful visit to the National Small Industries Corporation (NSIC) in Okhla. This educational trip provided students with a firsthand look into the ecosystem of small-scale industries, offering valuable insights into entrepreneurship, business operations, and the challenges and opportunities in the small business sector."},{id:6,title:"VisisonEX Podcast",description:"Hosted insightful podcasts with industry leaders like Sunny Vaghela (cybersecurity expert) and Surnit Shah (CEO of Dukaan), focusing on innovation, entrepreneurship, and leadershipWe have also conducted several more episodes featuring visionary speakers across diverse fields.",image:de,fullDescription:"The VisionEX Podcast series is an innovative platform where E-Cell brings together thought leaders, industry experts, and successful entrepreneurs to share their insights, experiences, and wisdom. Featuring distinguished guests like Sunny Vaghela, a cybersecurity expert, and Surnit Shah, CEO of Dukaan, these podcasts dive deep into topics of innovation, entrepreneurship, leadership, and personal growth."}];function me(){const t=o.useRef(null),[s,a]=o.useState(!0),[l,i]=o.useState(!1),[n,m]=o.useState(0),[h,b]=o.useState(!1),[g,f]=o.useState(null);o.useEffect(()=>{const c=()=>{b(window.innerWidth<=768)};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),o.useEffect(()=>{let c;return h&&(c=setInterval(()=>{m(x=>(x+1)%p.length)},3e3)),()=>{c&&clearInterval(c)}},[h]);const d=o.useCallback(c=>{if(t.current){const{current:x}=t,N=x.clientWidth,w=c==="left"?x.scrollLeft-N:x.scrollLeft+N;x.scrollTo({left:w,behavior:"smooth"}),a(w<=0),i(w+x.clientWidth>=x.scrollWidth)}},[]),u=o.useCallback(()=>{if(t.current){const{current:c}=t;a(c.scrollLeft<=0),i(c.scrollLeft+c.clientWidth>=c.scrollWidth)}},[]),v={initial:{opacity:0,x:100,scale:.8},animate:{opacity:1,x:0,scale:1,transition:{type:"spring",stiffness:300,damping:20}},exit:{opacity:0,x:-100,scale:.8,transition:{duration:.3}}},V={hidden:{opacity:0,scale:.9,y:50},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:300,damping:20}},exit:{opacity:0,scale:.9,y:50,transition:{duration:.2}}};return e.jsxs(e.Fragment,{children:[e.jsx("section",{id:"events",className:"section-padding bg-dark-100 relative",children:e.jsx("div",{className:"container",children:e.jsxs(r.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[e.jsxs("h2",{className:"text-3xl md:text-4xl font-heading font-bold mb-8 text-center",children:["Our ",e.jsx("span",{className:"text-primary",children:"Events"})]}),e.jsx("div",{className:"absolute left-4 md:left-12 top-1/2 transform -translate-y-1/2 z-10",children:e.jsx("button",{onClick:()=>d("left"),disabled:s,className:`
                  p-2 rounded-full bg-white/10 hover:bg-white/20 
                  ${s?"opacity-30 cursor-not-allowed":""}
                `,children:e.jsx(I,{className:"h-6 w-6 text-white"})})}),e.jsx("div",{className:"absolute right-4 md:right-12 top-1/2 transform -translate-y-1/2 z-10",children:e.jsx("button",{onClick:()=>d("right"),disabled:l,className:`
                  p-2 rounded-full bg-white/10 hover:bg-white/20 
                  ${l?"opacity-30 cursor-not-allowed":""}
                `,children:e.jsx(T,{className:"h-6 w-6 text-white"})})}),e.jsx("div",{ref:t,onScroll:u,className:"hidden md:flex overflow-x-scroll scrollbar-hide space-x-6 pb-6",style:{scrollSnapType:"x mandatory",WebkitOverflowScrolling:"touch"},children:p.map(c=>e.jsx("div",{className:"flex-shrink-0 w-72 md:w-96 scroll-snap-align-start cursor-pointer",style:{scrollSnapAlign:"center"},onClick:()=>f(c),children:e.jsxs("div",{className:"bg-dark-50 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 h-full flex flex-col",children:[e.jsx("div",{className:"h-48 md:h-64 w-full overflow-hidden",children:e.jsx("img",{src:c.image,alt:c.title,className:"w-full h-full object-cover object-center"})}),e.jsxs("div",{className:"p-6 flex-grow flex flex-col",children:[e.jsx("h3",{className:"text-xl font-bold text-white mb-2 flex-shrink-0",children:c.title}),e.jsx("p",{className:"text-light-50 mb-4 flex-grow line-clamp-3",children:c.description})]})]})},c.id))}),e.jsx("div",{className:"md:hidden relative w-full overflow-hidden",children:e.jsx(y,{mode:"wait",children:e.jsx(r.div,{variants:v,initial:"initial",animate:"animate",exit:"exit",className:"w-full px-4",onClick:()=>f(p[n]),children:e.jsxs("div",{className:"bg-dark-50 rounded-lg overflow-hidden shadow-lg h-full flex flex-col",children:[e.jsx("div",{className:"h-48 w-full overflow-hidden",children:e.jsx("img",{src:p[n].image,alt:p[n].title,className:"w-full h-full object-cover object-center"})}),e.jsxs("div",{className:"p-6 flex-grow flex flex-col",children:[e.jsx("h3",{className:"text-xl font-bold text-white mb-2 flex-shrink-0",children:p[n].title}),e.jsx("p",{className:"text-light-50 mb-4 flex-grow line-clamp-3",children:p[n].description})]})]})},p[n].id)})})]})})}),e.jsx(y,{children:g&&e.jsx(r.div,{className:"fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>f(null),children:e.jsxs(r.div,{className:"bg-dark-50 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto",variants:V,initial:"hidden",animate:"visible",exit:"exit",onClick:c=>c.stopPropagation(),children:[e.jsx("button",{onClick:()=>f(null),className:"absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2",children:e.jsx(L,{className:"h-6 w-6 text-white"})}),e.jsx("div",{className:"h-64 md:h-96 w-full overflow-hidden",children:e.jsx("img",{src:g.image,alt:g.title,className:"w-full h-full object-cover object-center"})}),e.jsxs("div",{className:"p-6 md:p-8",children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-white mb-4",children:g.title}),e.jsx("p",{className:"text-light-50 mb-6",children:g.fullDescription})]})]})})})]})}const he=t=>{const s=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,a=t.match(s);return a&&a[2].length===11?a[2]:null},ue=async t=>{try{const s="YOUR_YOUTUBE_DATA_API_KEY_HERE",l=(await U.get("https://www.googleapis.com/youtube/v3/videos",{params:{part:"snippet",id:t,key:s}})).data.items[0];if(!l)throw new Error("Video not found");return l.snippet.thumbnails.maxres?l.snippet.thumbnails.maxres.url:l.snippet.thumbnails.high.url}catch(s){return console.error("Error fetching YouTube thumbnail:",s),`https://img.youtube.com/vi/${t}/maxresdefault.jpg`}},xe=()=>{const[t,s]=o.useState([{id:"1",youtubeLink:"https://youtu.be/3rdJBk2sKZc?si=9FLS7d_I4WImbX4q",thumbnailUrl:""},{id:"2",youtubeLink:"https://youtu.be/fUxl-yTVIfQ?si=a6j85O5SefS6YLfl",thumbnailUrl:""},{id:"3",youtubeLink:"https://youtu.be/bdbQNryce-c?si=DmtI94X3pKh3hc3I",thumbnailUrl:""},{id:"4",youtubeLink:"https://youtu.be/HB_S1EKntd8?si=_BujQlPTuly_3Ylm",thumbnailUrl:""}]);o.useEffect(()=>{(async()=>{const i=await Promise.all(t.map(async n=>{const m=he(n.youtubeLink);if(m){const h=await ue(m);return{...n,thumbnailUrl:h}}return n}));s(i)})()},[]);const a=l=>{window.open(l,"_blank")};return e.jsx("section",{className:"section-padding bg-dark-200",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsxs("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:["Our ",e.jsx("span",{className:"text-primary",children:"Podcasts"})]}),e.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto",children:"Dive into insightful discussions and entrepreneurial journeys"})]}),e.jsx(r.div,{className:"flex overflow-x-scroll scrollbar-hide space-x-6 pb-6",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.5},children:t.map(l=>e.jsx(r.div,{className:"flex-shrink-0 w-72 bg-dark-100 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300",whileHover:{scale:1.05},onClick:()=>a(l.youtubeLink),children:e.jsxs("div",{className:"relative",children:[l.thumbnailUrl?e.jsx("img",{src:l.thumbnailUrl,alt:"Podcast Thumbnail",className:"w-full h-48 object-cover",onError:i=>{const n=i.target;n.src="/fallback-podcast-thumbnail.png"}}):e.jsx("div",{className:"w-full h-48 bg-gray-700 animate-pulse flex items-center justify-center",children:e.jsx("span",{className:"text-gray-400",children:"Loading Thumbnail..."})}),e.jsx("div",{className:"absolute top-2 right-2 bg-red-500 rounded-full p-2",children:e.jsx(C,{className:"text-white text-2xl"})})]})},l.id))})]})})},pe=[{icon:H,number:30,title:"Awards Won",description:"Recognized for outstanding entrepreneurial initiatives"},{icon:Y,number:50,title:"Sponserships",description:"Launched and supported by our E-Cell members"},{icon:q,number:100,title:"Students Reach",description:"Groundbreaking ideas developed and nurtured"},{icon:G,number:50,title:"Events Organised",description:"Empowered through entrepreneurship programs"}],ge=()=>{const[t,s]=_({triggerOnce:!0,threshold:.1});return e.jsx("section",{id:"achievements",className:"section-padding bg-dark-100",children:e.jsxs("div",{className:"container",children:[e.jsxs(r.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[e.jsxs("h2",{className:"text-3xl font-heading font-bold mb-4",children:["Our ",e.jsx("span",{className:"text-primary",children:"Achievements"})]}),e.jsx("p",{className:"text-light-50 max-w-2xl mx-auto",children:"A testament to our commitment to fostering entrepreneurship and innovation"})]}),e.jsx("div",{ref:t,className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:pe.map((a,l)=>e.jsxs(r.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:l*.2},className:"bg-dark-50 p-6 rounded-lg text-center hover:shadow-lg transition-all",children:[e.jsx("div",{className:"mb-4 flex justify-center",children:e.jsx(a.icon,{className:"w-16 h-16 text-primary"})}),e.jsx("h3",{className:"text-3xl font-bold text-light mb-2",children:s?e.jsx(B,{start:0,end:a.number,duration:2.5,separator:",",suffix:"+"}):"0+"}),e.jsx("h4",{className:"text-xl font-semibold text-primary mb-2",children:a.title}),e.jsx("p",{className:"text-light-50",children:a.description})]},l))})]})})},fe="/assets/speaker1-978e74a7.png",be="/assets/speaker2-794b64ac.png",ve="/assets/speaker3-8a18b33e.png",je="/assets/speaker4-10d2aa8f.png",ye="/assets/speaker5-2e1dde44.png",we="/assets/speaker6-62a6057d.png",Ne="/assets/speaker7-be055197.png",ke="/assets/speaker8-79804625.png",Se=[{id:1,name:"Dr Abhishek Tandon",role:"Joint CEO, Udhmodya Foundation",image:fe},{id:2,name:"Shri Bharat Bhushan Arora",role:"Director, Udhmodya Foundation",image:be},{id:3,name:"Mr. Sunny Vaghela",role:"Co-Founder & CPO, Zyper 365",image:ve},{id:4,name:"Arijit Bhattacharyya",role:"Founder & CEO, Virtualinfocam",image:je},{id:5,name:"Mr. Sumit Shah",role:"Founder And CEO Dukaan",image:ye},{id:6,name:"Mr. Shubham Maheshawari ",role:"Founder, Being Chief",image:we},{id:7,name:"Mr Jitendra Girdhar",role:"Founder & Director, QTC and VDC",image:Ne},{id:8,name:"Mrs. Vaneeta Aggarwal",role:"Founder, Bizemag Advisor",image:ke}];function Ee(){const t=o.useRef(null),[s,a]=o.useState(!0),[l,i]=o.useState(!1);o.useState(0);const[n,m]=o.useState(!1),[h,b]=o.useState(null),g=o.useCallback(()=>{if(t.current){const{scrollLeft:d,scrollWidth:u,clientWidth:v}=t.current;a(d===0),i(d+v>=u-10)}},[]),f=o.useCallback(d=>{if(t.current){const u=t.current.clientWidth,v=d==="left"?t.current.scrollLeft-u:t.current.scrollLeft+u;t.current.scrollTo({left:v,behavior:"smooth"})}},[]);return o.useEffect(()=>{const d=()=>{m(window.innerWidth<768)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),e.jsxs("section",{id:"speakers",className:"section-padding relative",children:[e.jsxs("div",{className:"container",children:[e.jsxs(r.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[e.jsxs("h2",{className:"text-3xl md:text-4xl font-heading font-bold mb-4",children:["Guest ",e.jsx("span",{className:"text-primary",children:"Speakers"})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"Learn from industry leaders and successful entrepreneurs who share their experiences and insights."})]}),e.jsxs("div",{className:"relative",children:[!s&&e.jsx("button",{onClick:()=>f("left"),className:"absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 dark:bg-dark-100/70 rounded-full p-2 shadow-lg",children:e.jsx(I,{className:"w-6 h-6 text-primary"})}),!l&&e.jsx("button",{onClick:()=>f("right"),className:"absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 dark:bg-dark-100/70 rounded-full p-2 shadow-lg",children:e.jsx(T,{className:"w-6 h-6 text-primary"})}),e.jsx(r.div,{ref:t,onScroll:g,className:"grid grid-flow-col auto-cols-[calc(100%/1)] sm:auto-cols-[calc(100%/2)] md:auto-cols-[calc(100%/4)] gap-10 overflow-x-auto no-scrollbar scroll-smooth",children:Se.map((d,u)=>e.jsxs(r.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6,delay:u*.1},onClick:()=>b(d),className:"cursor-pointer group flex flex-col items-center",children:[e.jsx("div",{className:"w-64 h-64 border-4 border-primary/20 rounded-lg p-2 mb-4 hover:border-primary/40 transition-all duration-300",children:e.jsx("div",{className:"relative overflow-hidden rounded-md w-full h-full",children:e.jsx("img",{src:d.image,alt:d.name,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-md"})})}),e.jsxs("div",{className:"text-center mt-2",children:[e.jsx("h3",{className:"text-xl font-bold mb-1",children:d.name}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:d.role})]})]},d.id))})]})]}),e.jsx(y,{children:h&&e.jsx(r.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",onClick:()=>b(null),children:e.jsxs(r.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"relative bg-white dark:bg-dark-100 rounded-xl max-w-2xl w-full mx-4 overflow-hidden",onClick:d=>d.stopPropagation(),children:[e.jsx("button",{onClick:()=>b(null),className:"absolute top-4 right-4 z-10 bg-gray-100 dark:bg-dark-50 rounded-full p-2",children:e.jsx(L,{className:"w-6 h-6 text-gray-600 dark:text-gray-300"})}),e.jsxs("div",{className:"grid md:grid-cols-2",children:[e.jsx("div",{className:"aspect-w-3 aspect-h-4",children:e.jsx("img",{src:h.image,alt:h.name,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"p-6 md:p-8",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:h.name}),e.jsx("p",{className:"text-primary font-medium mb-4",children:h.role})]})]})]})})})]})}const Ce=()=>{const[t,s]=o.useState(""),[a,l]=o.useState("idle"),i=async h=>{h.preventDefault(),l("loading"),setTimeout(()=>{l("success"),s("")},1e3)},n={hidden:{opacity:0,scale:.9},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},m={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:100}}};return e.jsx("section",{id:"newsletter",className:"section-padding py-8",children:e.jsx("div",{className:"container mx-auto px-4",children:e.jsxs(r.div,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"bg-purple-900 rounded-2xl p-6 md:p-8 text-center max-w-xl md:max-w-4xl mx-auto",children:[e.jsx(r.h2,{variants:m,className:"text-2xl md:text-3xl font-heading font-bold text-white mb-4",children:"Stay Updated"}),e.jsx(r.p,{variants:m,className:"text-purple-200 mb-6 text-sm md:text-base",children:"Subscribe to our newsletter for the latest updates on events, opportunities, and entrepreneurial insights."}),e.jsxs("form",{onSubmit:i,children:[e.jsxs(r.div,{variants:m,className:"flex flex-col sm:flex-row gap-3 max-w-md md:max-w-2xl mx-auto",children:[e.jsx(r.input,{variants:m,type:"email",value:t,onChange:h=>s(h.target.value),placeholder:"Enter your email",className:"flex-grow px-4 py-2 rounded-full bg-purple-800 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/50",required:!0}),e.jsx(r.button,{variants:m,whileHover:{scale:1.05},whileTap:{scale:.95},type:"submit",disabled:a==="loading",className:"bg-white text-primary hover:bg-gray-100 disabled:opacity-50 rounded-full px-5 py-2 text-sm",children:a==="loading"?"Subscribing...":"Subscribe"})]}),a==="success"&&e.jsx(r.p,{initial:{opacity:0},animate:{opacity:1},className:"text-green-300 text-sm mt-2",children:"Thank you for subscribing!"}),a==="error"&&e.jsx(r.p,{initial:{opacity:0},animate:{opacity:1},className:"text-red-300 text-sm mt-2",children:"An error occurred. Please try again."})]}),e.jsx("p",{className:"text-sm text-gray-300 mt-4",children:"We respect your privacy. Unsubscribe at any time."})]})})})};function Ie(){return e.jsxs("main",{className:"pt-16",children:[e.jsx("div",{id:"home",children:e.jsx(ie,{})}),e.jsx("div",{id:"about",children:e.jsx(ae,{})}),e.jsx("div",{id:"events",children:e.jsx(me,{})}),e.jsx("div",{id:"podcasts",children:e.jsx(xe,{})}),e.jsx("div",{id:"achievements",children:e.jsx(ge,{})}),e.jsx("div",{id:"speakers",children:e.jsx(Ee,{})}),e.jsx("div",{id:"newsletter",children:e.jsx(Ce,{})})]})}const Te="/assets/team1-ad8702b2.jpg",Le="/assets/team2-0f932906.jpg",Oe="/assets/team3-e55f8533.jpg",Ve="/assets/team4-3c484d1c.jpg",Ae=[{name:"Kartik Gulati",role:"President",image:Te,linkedin:"#",email:"kartik@ecell.com"},{name:"Manya Mehrotra",role:"Vice president",image:Le,linkedin:"#",email:"manya@ecell.com"},{name:"Harsh Raj",role:"General Secretary",image:Oe,linkedin:"#",email:"harsh@ecell.com"},{name:"Ishu Singh",role:"Social Media Head",image:Ve,linkedin:"#",email:"ishu@ecell.com"}],De=["Core Team","Technical","Marketing","Events","Content","Design"];function Pe(){return e.jsx("main",{className:"pt-20 pb-16",children:e.jsxs("div",{className:"container",children:[e.jsxs(r.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center mb-12",children:[e.jsxs("h1",{className:"text-4xl md:text-5xl font-heading font-bold mb-4",children:["Meet Our ",e.jsx("span",{className:"text-primary",children:"Team"})]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",children:"The passionate individuals behind E-Cell working together to foster entrepreneurship and innovation."})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:De.map(t=>e.jsx("button",{className:"px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors",children:t},t))}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:Ae.map((t,s)=>e.jsxs(r.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:s*.1},className:"group",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-lg aspect-w-3 aspect-h-4 mb-4",children:[e.jsx("img",{src:t.image,alt:t.name,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex justify-center space-x-4",children:[e.jsx("a",{href:t.linkedin,target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-primary",children:"LinkedIn"}),e.jsx("a",{href:`mailto:${t.email}`,className:"text-white hover:text-primary",children:"Email"})]})})]}),e.jsx("h3",{className:"text-xl font-bold mb-1",children:t.name}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:t.role})]},t.name))})]})})}const Me="/assets/d-276f62cc.jpg",Fe="/assets/d0-81fb9f3a.jpg",We="/assets/d2-a7b8a7ae.jpg",Re="/assets/d3-d4e6d98f.jpg",ze="/assets/d4-45aa6a0b.jpg",Ue="/assets/d5-36160123.jpg",_e="/assets/d6-9e2b38ba.jpg",Be="/assets/d7-ab7b9c33.jpg",He="/assets/d0-81fb9f3a.jpg",Ye="/assets/d9-cdcbc823.jpg",E=[{name:"Sponsor5",src:ze},{name:"Sponsor6",src:Ue},{name:"Sponsor7",src:_e},{name:"Sponsor4",src:Re},{name:"Sponsor8",src:Be},{name:"Sponsor2",src:Fe},{name:"Sponsor3",src:We},{name:"Sponsor1",src:Me},{name:"Sponsor9",src:He},{name:"Sponsor10",src:Ye}],qe=()=>e.jsxs("section",{className:"bg-dark-100 py-12 overflow-hidden",children:[e.jsx("div",{className:"text-center mb-8",children:e.jsx("h2",{className:"text-2xl font-bold text-white",children:"Our Sponsors & Partners"})}),e.jsx("div",{className:"w-full overflow-hidden",children:e.jsx(r.div,{className:"flex",animate:{x:["0%","-100%"],transition:{repeat:1/0,repeatType:"loop",duration:10,ease:"linear"}},children:e.jsx("div",{className:"flex space-x-12 items-center",children:[...E,...E].map((t,s)=>e.jsx(r.div,{whileHover:{scale:1.1},className:"flex-shrink-0",children:e.jsx("div",{className:"w-24 h-24 border-4 border-primary/20 rounded-full flex items-center justify-center p-2 hover:border-primary/40 transition-all duration-300 overflow-hidden",children:e.jsx("img",{src:t.src,alt:t.name,className:"w-full h-full object-cover rounded-full"})})},s))})})})]});function Ge(){return e.jsxs("div",{className:"min-h-screen flex flex-col",children:[e.jsx(J,{}),e.jsxs("div",{className:"flex-grow",children:[e.jsxs(K,{children:[e.jsx(k,{path:"/",element:e.jsx(Ie,{})}),e.jsx(k,{path:"/team",element:e.jsx(Pe,{})})]}),e.jsx(qe,{})]}),e.jsx(te,{})]})}X.createRoot(document.getElementById("root")).render(e.jsx($.StrictMode,{children:e.jsx(Q,{children:e.jsx(Ge,{})})}));
