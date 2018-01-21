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