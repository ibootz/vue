<template>
  <div class="page-container">
    <!-- 展开/关闭侧边导航栏 -->
    <div class="menu-toggler sidebar-toggler">
    </div>
    <!-- 开始 侧边栏 -->
    <div class="page-sidebar-wrapper">
      <!-- 开始 侧边栏 -->
      <div class="page-sidebar navbar-collapse collapse">
        <!-- 开始 侧边主目录 -->
<<<<<<< HEAD
        <ul class="page-sidebar-menu" data-keep-expanded="false"
            data-auto-scroll="false" data-slide-speed="200">
          <li class="nav-item start " :class="{'open': isOpen, 'active': isActive}">
=======
        <ul class="page-sidebar-menu">
          <li class="nav-item actived" :class="{'open': !currOpenIndex}">
>>>>>>> 5010d4954a9d6b1a7c075feb9d053603713d82ff
            <router-link to="/manage/home" class="nav-link">
              <i class="icon-home"></i>
              <span class="title">主页</span>
              <span class="selected" v-if="isActive"></span>
            </router-link>
          </li>
<<<<<<< HEAD
          <template v-for="(menu, i) in menus">
            <li class="heading">
              <h3 class="uppercase">{{menu.title}}</h3>
            </li>
            <tree-menu v-for="(navItem, m) in menu.subItems"
                       :navItem="navItem" :currOpenIndex.sync="currOpenIndex" :currActiveIndex.sync="currActiveIndex"
                       :index="i + '_' + m" :key="m"></tree-menu>
=======
          <template v-for="(menu, m) in menus">
            <li class="heading">
              <h3 class="uppercase">{{menu.title}}</h3>
            </li>
            <tree-menu v-for="(subitem, n) in menu.subitems"
                       :item="subitem" :index="m + '_' + n" :key="m + '_' + n"></tree-menu>
>>>>>>> 5010d4954a9d6b1a7c075feb9d053603713d82ff
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
  import TreeMenu from './test/TreeMenu.vue';
=======
  import { mapState, mapMutations } from 'vuex';
  import treeMenu from './test/TreeMenu.vue';
>>>>>>> 5010d4954a9d6b1a7c075feb9d053603713d82ff

  export default {
    name: 'home',
    components: {
      TreeMenu,
    },
    computed: {
<<<<<<< HEAD
      isOpen() {
        return this.currOpenIndex === '-1';
      },
      isActive() {
        return this.currActiveIndex === '-1';
      },
    },
    methods: {},
    watch: {
      currOpenIndex(newVal) {
        console.log(`currOpenIndex ouuter : ${newVal}`);
      },
      currActiveIndex(newVal) {
        console.log(`currActiveIndex outter : ${newVal}`);
      },
    },
    data() {
      return {
        currOpenIndex: '-1',
        currActiveIndex: '-1',
        index: '',
=======
      ...mapState(['currOpenIndex', 'currActiveIndex']),
    },
    methods: {
      ...mapMutations(['changeOpenIndex', 'changeActiveIndex']),
    },
    data() {
      return {
>>>>>>> 5010d4954a9d6b1a7c075feb9d053603713d82ff
        menus: [
          {
            title: '业务管理',
            subitems: [
              {
                title: '报表',
                icon: 'icon-pie-chart',
                subitems: [
                  {
                    url: '/manage/statistics/order_statistics',
                    title: '订单统计',
                  },
                  {
                    url: '/manage/statistics/product_statistics',
                    title: '产品统计',
                  },
                  {
                    url: '/manage/statistics/purchase_statistics',
                    title: '采购统计',
                  },
                ],
              },
              {
                title: '发货',
                icon: 'icon-plane',
                subitems: [
                  {
                    url: '/manage/delivery/pending_orders',
                    title: '待处理订单',
                  },
                  {
                    url: '/manage/delivery/delivery_orders',
                    title: '待发货订单',
                  },
                  {
                    url: '/manage/delivery/cancel_orders',
                    title: '待取消订单',
                  },
                  {
                    url: '/manage/delivery/delivery_logs',
                    title: '发货日志',
                  },
                ],
              },
            ],
          },
          {
            title: '平台管理',
            subitems: [
              {
                title: 'Ebay',
                icon: 'icon-layers',
                subitems: [
                  {
                    url: '/manage/salechannel/ebay/ebay_accounts',
                    title: '账号管理',
                  },
                  {
                    url: '/manage/salechannel/ebay/ebay_items',
                    title: '帖子管理',
                  },
                ],
              },
              {
                title: 'Amazon',
                icon: 'icon-feed',
                subitems: [
                  {
                    url: '/manage/salechannel/amazon/amazon_accounts',
                    title: '账号管理',
                  },
                ],
              },
            ],
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .page-sidebar .page-sidebar-menu > li.actived {
    &.open > a {
      border-left: 3px solid #5C9ACF !important;
      margin-left: -3px;
      padding-left: 15px;
    }
  }
</style>
