import Vue from 'vue'
import Component from 'vue-class-component'
import html from 'assets/html/home.html'
import 'assets/stylesheets/style.scss'

@Component({
  template: html
})
class HomeViewModel extends Vue {
}
new HomeViewModel({
  el: "#app",
});
