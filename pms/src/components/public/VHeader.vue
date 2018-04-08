<template>
  <div class="page-header navbar navbar-fixed-top">
    <!-- 开始 页首内部 -->
    <div class="page-header-inner ">
      <!-- 开始 LOGO -->
      <div class="page-logo">
        <router-link to="/manage/home">
          <img src="../../assets/logo.png" alt="logo" class="logo-default"/></router-link>
      </div>
      <!-- 结束 LOGO -->
      <!-- 开始 页首顶部 -->
      <div class="page-top">
        <!-- 开始 页首顶部导航栏 -->
        <div class="top-menu">
          <ul class="nav navbar-nav pull-right">
            <li class="separator hide"></li>
            <!-- 开始 提醒下拉框 -->
            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
            <li class="dropdown dropdown-extended dropdown-notification dropdown-dark open"
                @mouseover="dropdownToggle('header_notification_bar')"
                @mouseout="dropdownToggle('header_notification_bar')"
                id="header_notification_bar">
              <a href="javascript:;" class="dropdown-toggle">
                <i class="icon-bell"></i>
                <span class="badge badge-success"> {{unreadNoticeCount}} </span>
              </a>
              <transition name="fade" enter-active-class="fade-enter-active" leave-active-class="fade-leave-active">
                <ul class="dropdown-menu" v-show="dropdownToggleType.header_notification_bar">
                  <li class="external">
                    <h3>
                      <span class="bold">{{unreadNoticeCount}} 条</span>未读通知</h3>
                    <router-link to="/manage/user/user_profile">查看所有</router-link>
                  </li>
                  <li>
                    <v-bar wrapper="wrapper" vBar="" vBarInternal="" hBar="" hBarInternal="">
                      <ul class="dropdown-menu-list" data-handle-color="#637283">
                        <li v-for="notice in notices">
                          <a href="javascript:;">
                            <span class="time"> {{notice.time}}</span>
                            <span class="details">
                            <span class="label label-sm label-icon label-danger">
                              <i class="fa fa-bolt"></i>
                            </span> {{notice.content}}
                          </span>
                          </a>
                        </li>
                      </ul>
                    </v-bar>
                  </li>
                </ul>
              </transition>
            </li>
            <!-- 结束 提醒下拉框 -->
            <li class="separator hide"></li>
            <!-- 开始 消息下拉框 -->
            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
            <li class="dropdown dropdown-extended dropdown-inbox dropdown-dark open"
                @mouseover="dropdownToggle('header_inbox_bar')"
                @mouseout="dropdownToggle('header_inbox_bar')"
                id="header_inbox_bar">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                 data-close-others="true">
                <i class="icon-envelope-open"></i>
                <span class="badge badge-danger"> {{unreadMessageCount}} </span>
              </a>
              <transition name="fade">
                <ul class="dropdown-menu" v-show="dropdownToggleType.header_inbox_bar">
                  <li class="external">
                    <h3>你有
                      <span class="bold">{{unreadMessageCount}} 条</span> 新信息</h3>
                    <router-link to="/manage/user/app_inbox">查看所有</router-link>
                  </li>
                  <li>
                    <v-bar wrapper="wrapper" vBar="" vBarInternal="" hBar="" hBarInternal="">
                      <ul class="dropdown-menu-list" data-handle-color="#637283">
                        <li v-for="inbox in inboxes">
                          <a href="#">
                          <span class="photo"><img :src="inbox.userAvatar" class="img-circle"
                                                   alt="用户图像"></span>
                            <span class="subject"><span class="from"> {{inbox.username}} </span>
                          <span class="time">{{inbox.time}} </span></span>
                            <span class="message"> {{inbox.message}} </span>
                          </a>
                        </li>
                      </ul>
                    </v-bar>
                  </li>
                </ul>
              </transition>
            </li>
            <!-- 结束 消息下拉框 -->
            <li class="separator hide"></li>
            <!-- 开始 待办事项下拉框 -->
            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
            <li class="dropdown dropdown-extended dropdown-tasks dropdown-dark open"
                @mouseover="dropdownToggle('header_task_bar')"
                @mouseout="dropdownToggle('header_task_bar')"
                id="header_task_bar">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                 data-close-others="true">
                <i class="icon-calendar"></i>
                <span class="badge badge-primary"> {{todosCount}} </span>
              </a>
              <transition name="fade">
                <ul class="dropdown-menu extended tasks" v-show="dropdownToggleType.header_task_bar">
                  <li class="external">
                    <h3>You have
                      <span class="bold">{{todosCount}} 个</span> 待办事项</h3>
                    <router-link to="/manage/user/app_todos">查看所有</router-link>
                  </li>
                  <li>
                    <v-bar wrapper="wrapper" vBar="" vBarInternal="" hBar="" hBarInternal="">
                      <ul class="dropdown-menu-list" data-handle-color="#637283">
                        <li v-for="todo in todos">
                          <a href="javascript:;">
                        <span class="task">
                          <span class="desc">{{todo.content}}</span>
                          <span class="percent">{{todo.progress}}%</span>
                        </span>
                            <span class="progress">
                          <span style="width: 10%;"
                                class="progress-bar progress-bar-success"
                                :aria-valuenow="todo.progress" aria-valuemin="0" aria-valuemax="100">
                              <span class="sr-only">完成 {{todo.progress}}%</span>
                          </span>
                        </span>
                          </a>
                        </li>
                      </ul>
                    </v-bar>
                  </li>
                </ul>
              </transition>
            </li>
            <!-- 结束 待办事项下拉框 -->
            <!-- 开始 用户登录下拉框 -->
            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
            <li class="dropdown dropdown-user dropdown-dark open"
                @mouseover="dropdownToggle('header_user_bar')"
                @mouseout="dropdownToggle('header_user_bar')"
                id="header_user_bar">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                 data-close-others="true">
                <span class="username username-hide-on-mobile"> {{username}}</span>
                <!-- DOC: Do not remove below empty space(&nbsp;) as its purposely used -->
                <img alt="用户图像" class="img-circle" :src="userAvatar"/> </a>
              <transition name="fade">
                <ul class="dropdown-menu dropdown-menu-default" v-show="dropdownToggleType.header_user_bar">
                  <li>
                    <router-link to="/manage/user/user_profile">
                      <i class="icon-user"></i> 主页
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/manage/user/app_inbox">
                      <i class="icon-envelope-open"></i> 收件箱
                      <span class="badge badge-danger"> {{unreadMessageCount}} </span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/manage/user/app_todos">
                      <i class="icon-rocket"></i> 待办事项
                      <span class="badge badge-success"> {{todosCount}} </span>
                    </router-link>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <router-link to="/manage/user/login">
                      <i class="icon-key"></i> 登出
                    </router-link>
                  </li>
                </ul>
              </transition>
            </li>
            <!-- 结束 用户登录下拉框 -->
          </ul>
        </div>
        <!-- 结束 页首顶部导航栏 -->
      </div>
      <!-- 结束 页首顶部 -->
    </div>
    <!-- 结束 页首内部 -->
  </div>
</template>

<script type="text/javascript">
  // import v-bar
  import VBar from 'v-bar';

  export default {
    components: {
      VBar,
    },
    data() {
      return {
        unreadNoticeCount: 99,
        unreadMessageCount: 98,
        todosCount: 97,
        username: '烽火连城',
        userAvatar: 'http://localhost:88/layouts/layout/img/avatar9.jpg',
        notices: [
          {
            time: '13 分钟前',
            content: '新员工 张飞 加入我们',
          },
          {
            time: '34 分钟前',
            content: '员工 赵云 从公司离职',
          },
          {
            time: '3 小时前',
            content: '今天的采购需求已经生成完毕,今天的采购需求已经生成完毕,,今天的采购需求已经生成完毕,,今天的采购需求已经生成完毕, ',
          },
          {
            time: '13 分钟前',
            content: '新员工 张飞 加入我们',
          },
          {
            time: '34 分钟前',
            content: '员工 赵云 从公司离职',
          },
          {
            time: '3 小时前',
            content: '今天的采购需求已经生成完毕,今天的采购需求已经生成完毕,,今天的采购需求已经生成完毕,,今天的采购需求已经生成完毕, ',
          },
          {
            time: '13 分钟前',
            content: '新员工 张飞 加入我们',
          },
          {
            time: '34 分钟前',
            content: '员工 赵云 从公司离职',
          },
          {
            time: '3 小时前',
            content: '今天的采购需求已经生成完毕,今天的采购需求已经生成完毕,,今天的采购需求已经生成完毕,,今天的采购需求已经生成完毕, ',
          },
        ],
        inboxes: [
          {
            userAvatar: 'http://localhost:88/layouts/layout/img/avatar2.jpg',
            username: '曹操',
            time: '刚刚',
            message: '天下真英雄唯你我二人也...',
          },
          {
            userAvatar: 'http://localhost:88/layouts/layout/img/avatar3.jpg',
            username: '孔融',
            time: '5分钟前',
            message: '来吃梨吃梨，不用客气...',
          },
          {
            userAvatar: 'http://localhost:88/layouts/layout/img/avatar4.jpg',
            username: '孙权',
            time: '29 分钟前',
            message: '公瑾，你肥皂掉了...',
          },
          {
            userAvatar: 'http://localhost:88/layouts/layout/img/avatar5.jpg',
            username: '华佗',
            time: '2 小时前',
            message: '你该换换脑瓜子了...',
          },
          {
            userAvatar: 'http://localhost:88/layouts/layout/img/avatar6.jpg',
            username: '周瑜',
            time: '14 小时前',
            message: '我本将心向明月，奈何明月照沟渠...',
          },
        ],
        todos: [
          {
            content: '周五之前采购张角家的毛毯12条',
            progress: 8,
          },
          {
            content: '周三之前制定出本季的销售计划，提交给曹总',
            progress: 26,
          },
          {
            content: '和闵玉丹商讨系统升级的事情',
            progress: 35,
          },
          {
            content: '和认识商谈关于这个月延期发放工资的事',
            progress: 63,
          },
          {
            content: '周六和王局长打高尔夫',
            progress: 0,
          },
        ],
        dropdownToggleType: {
          'header_notification_bar': false,
          'header_inbox_bar': false,
          'header_task_bar': false,
          'header_user_bar': false,
        },
      };
    },

    methods: {
      dropdownToggle(type) {
        this.dropdownToggleType[type] = !this.dropdownToggleType[type];
      },
    },
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 274px;
    width: 274px;
  }

  .page-header.navbar .top-menu .navbar-nav > li.dropdown.open .dropdown-toggle {
    background-color: #FFFFFF;
  }

  .fade-enter-active,
  .fade-leave-active {
    animation-duration: 0.5s;
    animation-fill-mode: both;
  }

  .page-header.navbar .top-menu .navbar-nav > li.dropdown-dark .dropdown-menu {
    margin-top: -3px;
  }
</style>
