const Toast = {
  install(Vue, options) {
    let opt = {
      type: 'info',
      duration: 2000 // 持续时间
    };
    for (let property in options) {
      opt[property] = options[property]; // 使用 options 的配置
    }
    Vue.prototype.$toast = (tips, types) => {
      console.log(tips, types);
      if (!types) {
      } else if (typeof types === 'number') {
        opt.duration = types; // 如果types为number 默认是时间
      } else {
        for (let property in types) {
          opt[property] = types[property]; // 使用 types 的配置
        }
      }
      if (document.getElementsByClassName('vue_ltoast').length) {
        // 如果toast还在，则不再执行
        return;
      }
      let ToastTpl;
      if (opt.type === 'info') {
        ToastTpl = Vue.extend({
          template: '<div class="vue_ltoast">' + tips + '</div>'
        });
      } else if (opt.type === 'success') {
        ToastTpl = Vue.extend({
          template: '<div class="vue_ltoast">' +
          '<i class="iconfont icon-success"></i>' +
          tips +
          '</div>'
        });
      } else if (opt.type === 'error') {
        ToastTpl = Vue.extend({
          template: '<div class="vue_ltoast">' +
          '<i class="iconfont icon-chahao"></i>' +
          tips +
          '</div>'
        });
      }
      let tpl = new ToastTpl().$mount().$el;
      document.body.appendChild(tpl);
      setTimeout(function () {
        document.body.removeChild(tpl);
      }, opt.duration);
    };
    ['success', 'error', 'info'].forEach(type => {
      Vue.prototype.$toast[type] = (tips, duration) => {
        return Vue.prototype.$toast(tips, {
          type: type,
          duration: duration || 2000
        });
      };
    });
  }
};

module.exports = Toast;
