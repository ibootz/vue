<template>
<<<<<<< HEAD
  <li class="nav-item  " :class="{'open': isOpen, 'active': isActive}">
    <a href="javascript:;" class="nav-link "
       :class="{'nav-toggle': hasSubItems()}"
       @click="handleNavToggle()">
      <i v-if="innerNavItem.iconCls" :class="innerNavItem.iconCls"></i>
      <span class="title">{{innerNavItem.title}}</span>
      <span class="selected" v-if="isActive"></span>
      <span class="arrow" v-if="hasSubItems()"
            :class="{'open': isOpen}"></span>
    </a>
    <ul class="sub-menu" v-if="hasSubItems()"
        :style="isOpen ? 'display:block' : 'display:none'">
      <tree-menu v-for="(subItem, i) in innerNavItem.subItems"
                 :navItem="subItem" :currOpenIndex.sync="innerCurrOpenIndex"
                 :currActiveIndex.sync="innerCurrActiveIndex"
                 :index="index + '_' + i" :key="i"></tree-menu>
    </ul>
=======
  <li class="nav-item  " :class="{'open': isOpen, 'actived': hasSubItems()}">
    <a href="javascript:;" class="nav-link " :class="{'nav-toggle': hasSubItems()}" @click="handleNavToggle()">
      <i v-if="item.icon" :class="item.icon"></i>
      <span class="title">{{item.title}}</span>
      <span class="selected" v-if="isActive"></span>
      <span class="arrow" v-if="hasSubItems()" :class="{'open': isOpen}"></span>
    </a>
    <template v-if="hasSubItems()">
      <ul class="sub-menu " style="display:block;" v-show="isOpen">
        <tree-menu v-for="(subitem, i) in item.subitems" :item="subitem" :index="index + '_' + i"
                   :key="index + '_' + i"></tree-menu>
      </ul>
    </template>
>>>>>>> 5010d4954a9d6b1a7c075feb9d053603713d82ff
  </li>
</template>

<script>
<<<<<<< HEAD
  export default {
    name: 'treeMenu',
    props: {
      'navItem': {
        type: Object,
      },
      'index': {
        type: String,
      },
      'currOpenIndex': {
        type: String,
      },
      'currActiveIndex': {
        type: String,
      },
    },
    data() {
      return {
        innerNavItem: this.navItem,
        innerIndex: this.index,
        innerCurrOpenIndex: this.currOpenIndex,
        innerCurrActiveIndex: this.currActiveIndex,
      };
    },
    methods: {
      hasSubItems() {
        return !!this.innerNavItem.subItems && this.innerNavItem.subItems.length > 0;
      },
      handleNavToggle() {
        if (this.hasSubItems()) { // 有子菜单，点击该元素，只会打开open子菜单
          if (this.innerIndex === this.innerCurrOpenIndex) {
            this.innerCurrOpenIndex = '-1';
            this.$emit('update:currOpenIndex', '-1');
            return;
          }
          // 修改当前open的子菜单编号
          this.innerCurrOpenIndex = this.innerIndex;
          this.$emit('update:currOpenIndex', this.innerIndex);
        } else { // 没有子菜单，已经是最终菜单列表
          if (this.innerIndex === this.innerCurrActiveIndex) {
            return;
          }
//          this.menuGo(this.navItem.url);
          console.log('修改当前active的子菜单编号 >> ', this.innerIndex);
          // 修改当前active的子菜单编号
          this.innerCurrActiveIndex = this.innerIndex;
          this.$emit('update:currActiveIndex', this.innerIndex);
=======
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'treeMenu',
    props: ['item', 'index'],
    methods: {
      ...mapMutations(['changeOpenIndex', 'changeActiveIndex']),
      hasSubItems() {
        return !!this.item.subitems && this.item.subitems.length > 0;
      },
      handleNavToggle() {
        if (this.hasSubItems()) { // 有子菜单，点击该元素，只会打开open子菜单
          if (this.isOpen) { // 已经点击过，当前再次点击的话，菜单折叠
            const indexArr = !!this.index && this.index.split('_');
            indexArr.splice(-1, 1);
            let targetIndex = '-1';
            if (indexArr.length > 0) {
              targetIndex = indexArr.join('_');
            }
            // 激活上一级菜单
            this.changeOpenIndex(targetIndex);
            return;
          }
          this.changeOpenIndex(this.index);
        } else { // 没有子菜单，已经是最终菜单列表
          if (this.isActive) {
            return;
          }
          // router到当前点击菜单的路由
//          this.menuPush(this.item.url);
          // 修改当前active的子菜单编号
          this.changeActiveIndex(this.index);
>>>>>>> 5010d4954a9d6b1a7c075feb9d053603713d82ff
        }
      },
      menuPush(url) {
        if (url.includes('http') || url.includes('https')) {
          window.location.href = url;
        } else {
          this.$router.push({ path: url });
        }
      },
    },
    computed: {
      ...mapState(['currOpenIndex', 'currActiveIndex']),
      isOpen() {
<<<<<<< HEAD
        return this.innerCurrOpenIndex === this.innerIndex;
      },
      isActive() {
        return this.innerCurrActiveIndex === this.innerIndex;
=======
        return this.currOpenIndex === this.index
          || this.currOpenIndex.indexOf(this.index) > -1
          || this.currActiveIndex === this.index;
      },
      isActive() {
        return this.currActiveIndex === this.index;
>>>>>>> 5010d4954a9d6b1a7c075feb9d053603713d82ff
      },
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
