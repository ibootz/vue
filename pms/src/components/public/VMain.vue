<template>
  <div class="page-container" :class="{'page-sidebar-closed': isSidebarExpand}">
    <!-- 展开/关闭侧边导航栏 -->
    <div class="menu-toggler sidebar-toggler" @click.stop="handleSidebar()">
    </div>
    <!-- 开始 侧边栏 -->
    <div class="page-sidebar-wrapper">
      <!-- 开始 侧边栏 -->
      <div class="page-sidebar navbar-collapse collapse">
        <!-- 开始 侧边主目录 -->
        <ul class="page-sidebar-menu" :class="{'page-sidebar-menu-closed': isSidebarExpand}" data-keep-expanded="false"
            data-auto-scroll="false" data-slide-speed="200">
          <li class="nav-item start active open">
            <router-link to="/manage/home" class="nav-link">
              <i class="icon-home"></i>
              <span class="title">主页</span>
              <span class="selected"></span>
            </router-link>
          </li>
          <li class="heading">
            <h3 class="uppercase">业务管理</h3>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-pie-chart"></i>
              <span class="title">报表</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/statistics/order_statistics" class="nav-link ">
                  <span class="title">订单统计</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/statistics/product_statistics" class="nav-link ">
                  <span class="title">产品统计</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/statistics/purchase_statistics" class="nav-link ">
                  <span class="title">采购统计</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/statistics/logistic_statistics" class="nav-link ">
                  <span class="title">物流统计</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/statistics/out_of_stock_statistics" class="nav-link ">
                  <span class="title">缺货统计</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/statistics/performance_statistics" class="nav-link ">
                  <span class="title">绩效统计</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-plane"></i>
              <span class="title">发货</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/delivery/pending_orders" class="nav-link ">
                  <span class="title">待处理订单</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/delivery/delivery_orders" class="nav-link ">
                  <span class="title">待发货订单</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/delivery/cancel_orders" class="nav-link ">
                  <span class="title">待取消订单</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/delivery/delivery_logs" class="nav-link ">
                  <span class="title">发货日志</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-basket-loaded"></i>
              <span class="title">订单</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/order/custom_orders" class="nav-link ">
                  <span class="title">客户订单</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/order/out_of_stock_orders" class="nav-link ">
                  <span class="title">缺货订单</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/order/refunds" class="nav-link ">
                  <span class="title">退款管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/order/returns" class="nav-link ">
                  <span class="title">退件管理</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-briefcase"></i>
              <span class="title">采购</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/purchase/purchase_requirements" class="nav-link ">
                  <span class="title">采购需求</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/purchase/out_of_stock_products" class="nav-link ">
                  <span class="title">缺货产品</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/purchase/purchase_tasks" class="nav-link ">
                  <span class="title">采购单管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/purchase/suppliers" class="nav-link ">
                  <span class="title">供应商管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/purchase/quality_inspections" class="nav-link nav-toggle ">
                  <span class="title">质检管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/purchase/weighings" class="nav-link nav-toggle ">
                  <span class="title">称重管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/purchase/purchase_logs" class="nav-link nav-toggle ">
                  <span class="title">采购日志</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-wallet"></i>
              <span class="title">产品</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/product/skus" class="nav-link ">
                  <span class="title">单品管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/product/sku_suits" class="nav-link ">
                  <span class="title">套装管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/product/categories" class="nav-link ">
                  <span class="title">类目管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/product/brands" class="nav-link ">
                  <span class="title">品牌管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/product/product_logs" class="nav-link ">
                  <span class="title">产品日志</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-social-dropbox"></i>
              <span class="title">物流</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/logistics/invoices" class="nav-link ">
                  <span class="title">发货单管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/logistics/inventories" class="nav-link ">
                  <span class="title">库存管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/logistics/warehouses" class="nav-link ">
                  <span class="title">仓库管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/logistics/logistics_logs" class="nav-link ">
                  <span class="title">物流日志</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-earphones-alt"></i>
              <span class="title">客服</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/customerservice/customers" class="nav-link ">
                  <span class="title">客户管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/customerservice/message_templates" class="nav-link ">
                  <span class="title">消息模板</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <a href="javascript:;" class="nav-link nav-toggle">
                  <span class="title">平台CASE</span>
                  <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                  <li class="nav-item ">
                    <router-link to="/manage/case/ebay_messages" class="nav-link "> Ebay消息
                    </router-link>
                  </li>
                  <li class="nav-item ">
                    <router-link to="/manage/case/ebay_disputes" class="nav-link "> Ebay争议
                    </router-link>
                  </li>
                  <li class="nav-item ">
                    <router-link to="/manage/case/ebay_comments" class="nav-link "> Ebay评论
                    </router-link>
                  </li>
                  <li class="nav-item ">
                    <router-link to="/manage/case/amazon_comments" class="nav-link "> Amazon评论
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="heading">
            <h3 class="uppercase">平台管理</h3>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-layers"></i>
              <span class="title">Ebay</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/salechannel/ebay/ebay_accounts" class="nav-link ">
                  <span class="title">账号管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/salechannel/ebay/ebay_items" class="nav-link ">
                  <span class="title">帖子管理</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-feed"></i>
              <span class="title">Amazon</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/salechannel/amazon/amazon_accounts" class="nav-link ">
                  <span class="title">账号管理</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-basket"></i>
              <span class="title">速卖通</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/salechannel/smt/smt_accounts" class="nav-link ">
                  <span class="title">账号管理</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-globe-alt"></i>
              <span class="title">Wish</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/salechannel/wish/wish_accounts" class="nav-link ">
                  <span class="title">账号管理</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-credit-card"></i>
              <span class="title">Paypal</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/salechannel/paypal/paypal_accounts" class="nav-link ">
                  <span class="title">账号管理</span>
                </router-link>
              </li>
            </ul>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/salechannel/paypal/paypal_transactions" class="nav-link ">
                  <span class="title">交易管理</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="heading">
            <h3 class="uppercase">OA管理</h3>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-user-follow"></i>
              <span class="title">部门</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/oa/departments" class="nav-link ">
                  <span class="title">部门管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/oa/works" class="nav-link ">
                  <span class="title">岗位管理</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-user"></i>
              <span class="title">员工</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/staff/staff" class="nav-link ">
                  <span class="title">员工管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/staff/roles" class="nav-link ">
                  <span class="title">角色管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/staff/assessments" class="nav-link ">
                  <span class="title">考核管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/staff/attendance" class="nav-link ">
                  <span class="title">考勤管理</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-notebook"></i>
              <span class="title">财务</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/finance/wage" class="nav-link ">
                  <span class="title">工资管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/finance/taxations" class="nav-link ">
                  <span class="title">税务管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/finance/reimbursements" class="nav-link ">
                  <span class="title">报销管理</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/finance/approvals" class="nav-link ">
                  <span class="title">审批管理</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-paper-clip"></i>
              <span class="title">培训</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/training/training" class="nav-link ">
                  <span class="title">培训课程</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/training/exams" class="nav-link ">
                  <span class="title">培训考试</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="heading">
            <h3 class="uppercase">系统</h3>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-wrench"></i>
              <span class="title">实用工具</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/tools/price_calculator" class="nav-link ">
                  <span class="title">价格试算</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/tools/exchange_rate_conversion" class="nav-link ">
                  <span class="title">汇率换算</span>
                </router-link>
              </li>

              <li class="nav-item  ">
                <router-link to="/manage/tools/template_formatter" class="nav-link ">
                  <span class="title">模板格式化</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/tools/qrcode_generator" class="nav-link ">
                  <span class="title">二维码生成</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/tools/messages" class="nav-link ">
                  <span class="title">内部消息</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/tools/calendar" class="nav-link ">
                  <span class="title">日历提醒</span>
                </router-link>
              </li>
              <li class="nav-item  ">
                <router-link to="/manage/tools/todos" class="nav-link ">
                  <span class="title">待办事项</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item  ">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-mouse"></i>
              <span class="title">访问管理</span>
              <span class="arrow"></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item  ">
                <router-link to="/manage/site/site_access" class="nav-link ">
                  <span class="title">访问记录</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="nav-link nav-toggle">
              <i class="icon-clock"></i>
              <span class="title">定时任务</span>
              <span class="arrow "></span>
            </a>
            <ul class="sub-menu">
              <li class="nav-item">
                <router-link to="/manage/task/taskes" class="nav-link ">
                  <span class="title">任务管理</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/manage/task/task_logs" class="nav-link ">
                  <span class="title">执行日志</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <!-- 结束 侧边主目录 -->
      </div>
    </div>
    <!-- 结束 侧边栏 -->

    <!-- 开始 主区域 -->
    <div class="page-content-wrapper">
      <div class="page-content">

        <!-- 上部 -->
        <VMainTop></VMainTop>

        <!-- 面包屑 -->
        <VMainBreadcrumb></VMainBreadcrumb>

        <!-- 内容区域 -->
        <router-view></router-view>

      </div>
    </div>
    <!-- 结束 主区域 -->
  </div>
</template>

<script type="text/javascript">
  import VMainTop from './VMainTop.vue';
  import VMainBreadcrumb from './VMainBreadcrumb.vue';

  export default {
    components: {
      VMainTop,
      VMainBreadcrumb,
    },
    data() {
      return {
        isSidebarExpand: false,
      };
    },
    methods: {
      handleSidebar() {
        this.isSidebarExpand = !this.isSidebarExpand;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .page-container .menu-toggler {
    background: url(../../assets/layouts/layout/img/sidebar-toggle-light.png) no-repeat center center;
    display: block;
    cursor: pointer;
    opacity: 0.6;
    filter: alpha(opacity=60);
    width: 20px;
    height: 14px;
  }

  .page-container .sidebar-toggler {
    position: fixed;
    left: 225px;
    top: 30px;
    z-index: 9999;
  }

  .fade-enter-active,
  .fade-leave-active {
    animation-duration: 0.5s;
    animation-fill-mode: both;
  }
</style>
