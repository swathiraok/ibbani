// Router.route('/', function () {
//     this.layout("header");
//     this.render('homePage');
//     this.layout('footer');
//   });
  
//   Router.route('/', function () {
    
//     this.render('FAQ');
//     this.render('footer');
//   });

Router.configure({
    LayoutTemplate: 'main-layout'
});
Router.map(function(){
    this.route('home', {
        path: '/',
        template: 'homePage'
    });
});
Router.map(function(){
    this.route('team', {
        path: '/team',
        template: 'teamPage'
    });
});
Router.map(function(){
    this.route('FAQ', {
        path: '/FAQ',
        template: 'FAQPage'
    });
});
Router.map(function(){
    this.route('aboutUs', {
        path: '/aboutUs',
        template: 'aboutUsPage'
    });
});
Router.map(function(){
    this.route('gallery', {
        path: '/gallery',
        template: 'galleryPage'
    });
});
Router.map(function(){
    this.route('donate', {
        path: '/donate',
        template: 'donatePage'
    });
});
Router.map(function(){
    this.route('whatwedo', {
        path: '/whatwedo',
        template: 'whatwedoPage'
    });
});
Router.map(function(){
    this.route('howwedo', {
        path: '/howwedo',
        template: 'howwedoPage'
    });
});
Router.map(function(){
    this.route('donateform', {
        path: '/donateform',
        template: 'donateformPage'
    });
});
