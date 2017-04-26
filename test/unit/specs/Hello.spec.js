import Vue from 'vue'
import Home from '@/views/Home'
import TeamIntroduction from '@/views/TeamIntroduction'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('主页')
  })
})

describe('TeamIntroduction.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TeamIntroduction)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('团队介绍')
  })
})
