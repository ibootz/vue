import Vue from 'vue';
import Router from 'vue-router';
import App from '../App.vue';

/* 分块加载 */
const Manage = () => import(/* webpackChunkName: "manage" */ '../components/Manage');
const Home = () => import(/* webpackChunkName: "home" */ '../components/pages/Home');
const AmazonComments = () => import(/* webpackChunkName: "case" */ '../components/pages/case/AmazonComments');
const EbayComments = () => import(/* webpackChunkName: "case" */ '../components/pages/case/EbayComments');
const EbayDisputes = () => import(/* webpackChunkName: "case" */ '../components/pages/case/EbayDisputes');
const EbayMessages = () => import(/* webpackChunkName: "case" */ '../components/pages/case/EbayMessages');
const Customers = () => import(/* webpackChunkName: "customerservice" */ '../components/pages/customerservice/Customers');
const MessageTemplates = () => import(/* webpackChunkName: "customerservice" */ '../components/pages/customerservice/MessageTemplates');
const CancelOrders = () => import(/* webpackChunkName: "delivery" */ '../components/pages/delivery/CancelOrders');
const DeliveryLogs = () => import(/* webpackChunkName: "delivery" */ '../components/pages/delivery/DeliveryLogs');
const DeliveryOrders = () => import(/* webpackChunkName: "delivery" */ '../components/pages/delivery/DeliveryOrders');
const PendingOrders = () => import(/* webpackChunkName: "delivery" */ '../components/pages/delivery/PendingOrders');
const Approvals = () => import(/* webpackChunkName: "finance" */ '../components/pages/finance/Approvals');
const Reimbursements = () => import(/* webpackChunkName: "finance" */ '../components/pages/finance/Reimbursements');
const Taxations = () => import(/* webpackChunkName: "finance" */ '../components/pages/finance/Taxations');
const Wage = () => import(/* webpackChunkName: "finance" */ '../components/pages/finance/Wage');
const Inventories = () => import(/* webpackChunkName: "logistics" */ '../components/pages/logistics/Inventories');
const Invoices = () => import(/* webpackChunkName: "logistics" */ '../components/pages/logistics/Invoices');
const LogisticsLogs = () => import(/* webpackChunkName: "logistics" */ '../components/pages/logistics/LogisticsLogs');
const Warehouses = () => import(/* webpackChunkName: "logistics" */ '../components/pages/logistics/Warehouses');
const Departments = () => import(/* webpackChunkName: "oa" */ '../components/pages/oa/Departments');
const Works = () => import(/* webpackChunkName: "oa" */ '../components/pages/oa/Works');
const CustomOrders = () => import(/* webpackChunkName: "order" */ '../components/pages/order/CustomOrders');
const OutOfStockOrders = () => import(/* webpackChunkName: "order" */ '../components/pages/order/OutOfStockOrders');
const Refunds = () => import(/* webpackChunkName: "order" */ '../components/pages/order/Refunds');
const Returns = () => import(/* webpackChunkName: "order" */ '../components/pages/order/Returns');
const Brands = () => import(/* webpackChunkName: "product" */ '../components/pages/product/Brands');
const Categories = () => import(/* webpackChunkName: "product" */ '../components/pages/product/Categories');
const ProductLogs = () => import(/* webpackChunkName: "product" */ '../components/pages/product/ProductLogs');
const Skus = () => import(/* webpackChunkName: "product" */ '../components/pages/product/Skus');
const SkuSuits = () => import(/* webpackChunkName: "product" */ '../components/pages/product/SkuSuits');
const OutOfStockProducts = () => import(/* webpackChunkName: "purchase" */ '../components/pages/purchase/OutOfStockProducts');
const PurchaseLogs = () => import(/* webpackChunkName: "purchase" */ '../components/pages/purchase/PurchaseLogs');
const PurchaseRequirements = () => import(/* webpackChunkName: "purchase" */ '../components/pages/purchase/PurchaseRequirements');
const PurchaseTasks = () => import(/* webpackChunkName: "purchase" */ '../components/pages/purchase/PurchaseTasks');
const QualityInspections = () => import(/* webpackChunkName: "purchase" */ '../components/pages/purchase/QualityInspections');
const Suppliers = () => import(/* webpackChunkName: "purchase" */ '../components/pages/purchase/Suppliers');
const Weighings = () => import(/* webpackChunkName: "purchase" */ '../components/pages/purchase/Weighings');
const AmazonAccounts = () => import(/* webpackChunkName: "salechannel" */ '../components/pages/salechannel/amazon/AmazonAccounts');
const EbayAccounts = () => import(/* webpackChunkName: "salechannel" */ '../components/pages/salechannel/ebay/EbayAccounts');
const EbayItems = () => import(/* webpackChunkName: "salechannel" */ '../components/pages/salechannel/ebay/EbayItems');
const PaypalAccounts = () => import(/* webpackChunkName: "salechannel" */ '../components/pages/salechannel/paypal/PaypalAccounts');
const PaypalTransactions = () => import(/* webpackChunkName: "salechannel" */ '../components/pages/salechannel/paypal/PaypalTransactions');
const SmtAccounts = () => import(/* webpackChunkName: "salechannel" */ '../components/pages/salechannel/smt/SmtAccounts');
const WishAccounts = () => import(/* webpackChunkName: "salechannel" */ '../components/pages/salechannel/wish/WishAccounts');
const SiteAccess = () => import(/* webpackChunkName: "site" */ '../components/pages/site/SiteAccess');
const Assessments = () => import(/* webpackChunkName: "staff" */ '../components/pages/staff/Assessments');
const Attendance = () => import(/* webpackChunkName: "staff" */ '../components/pages/staff/Attendance');
const Roles = () => import(/* webpackChunkName: "staff" */ '../components/pages/staff/Roles');
const Staff = () => import(/* webpackChunkName: "staff" */ '../components/pages/staff/Staff');
const LogisticStatistics = () => import(/* webpackChunkName: "statistics" */ '../components/pages/statistics/LogisticStatistics');
const OrderStatistics = () => import(/* webpackChunkName: "statistics" */ '../components/pages/statistics/OrderStatistics');
const OutOfStockStatistics = () => import(/* webpackChunkName: "statistics" */ '../components/pages/statistics/OutOfStockStatistics');
const PerformanceStatistics = () => import(/* webpackChunkName: "statistics" */ '../components/pages/statistics/PerformanceStatistics');
const ProductStatistics = () => import(/* webpackChunkName: "statistics" */ '../components/pages/statistics/ProductStatistics');
const PurchaseStatistics = () => import(/* webpackChunkName: "statistics" */ '../components/pages/statistics/PurchaseStatistics');
const Taskes = () => import(/* webpackChunkName: "task" */ '../components/pages/task/Taskes');
const TaskLogs = () => import(/* webpackChunkName: "task" */ '../components/pages/task/TaskLogs');
const Calendar = () => import(/* webpackChunkName: "tools" */ '../components/pages/tools/Calendar');
const ExchangeRateConversion = () => import(/* webpackChunkName: "tools" */ '../components/pages/tools/ExchangeRateConversion');
const Messages = () => import(/* webpackChunkName: "tools" */ '../components/pages/tools/Messages');
const PriceCalculator = () => import(/* webpackChunkName: "tools" */ '../components/pages/tools/PriceCalculator');
const QrcodeGenerator = () => import(/* webpackChunkName: "tools" */ '../components/pages/tools/QrcodeGenerator');
const TemplateFormatter = () => import(/* webpackChunkName: "tools" */ '../components/pages/tools/TemplateFormatter');
const Todos = () => import(/* webpackChunkName: "tools" */ '../components/pages/tools/Todos');
const Exams = () => import(/* webpackChunkName: "training" */ '../components/pages/training/Exams');
const Training = () => import(/* webpackChunkName: "training" */ '../components/pages/training/Training');
const UserProfile = () => import(/* webpackChunkName: "user" */ '../components/pages/user/UserProfile');
const AppInbox = () => import(/* webpackChunkName: "user" */ '../components/pages/user/AppInbox');
const AppTodos = () => import(/* webpackChunkName: "user" */ '../components/pages/user/AppTodos');

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: App,
    redirect: '/manage',
  },
  {
    path: '/manage',
    component: Manage,
    children: [{
      path: '',
      component: Home,
      meta: [],
    }, {
      path: 'home',
      component: Home,
      meta: [],
    }, {
      path: 'user/user_profile',
      component: UserProfile,
      meta: [],
    }, {
      path: 'user/app_inbox',
      component: AppInbox,
      meta: [],
    }, {
      path: 'user/app_todos',
      component: AppTodos,
      meta: [],
    }, {
      path: 'statistics/order_statistics',
      component: OrderStatistics,
      meta: [],
    }, {
      path: 'statistics/product_statistics',
      component: ProductStatistics,
      meta: [],
    }, {
      path: 'statistics/purchase_statistics',
      component: PurchaseStatistics,
      meta: [],
    }, {
      path: 'statistics/logistic_statistics',
      component: LogisticStatistics,
      meta: [],
    }, {
      path: 'statistics/out_of_stock_statistics',
      component: OutOfStockStatistics,
      meta: [],
    }, {
      path: 'statistics/performance_statistics',
      component: PerformanceStatistics,
      meta: [],
    }, {
      path: 'delivery/pending_orders',
      component: PendingOrders,
      meta: [],
    }, {
      path: 'delivery/delivery_orders',
      component: DeliveryOrders,
      meta: [],
    }, {
      path: 'delivery/cancel_orders',
      component: CancelOrders,
      meta: [],
    }, {
      path: 'delivery/delivery_logs',
      component: DeliveryLogs,
      meta: [],
    }, {
      path: 'order/custom_orders',
      component: CustomOrders,
      meta: [],
    }, {
      path: 'order/out_of_stock_orders',
      component: OutOfStockOrders,
      meta: [],
    }, {
      path: 'order/refunds',
      component: Refunds,
      meta: [],
    }, {
      path: 'order/returns',
      component: Returns,
      meta: [],
    }, {
      path: 'purchase/purchase_requirements',
      component: PurchaseRequirements,
      meta: [],
    }, {
      path: 'purchase/out_of_stock_products',
      component: OutOfStockProducts,
      meta: [],
    }, {
      path: 'purchase/purchase_tasks',
      component: PurchaseTasks,
      meta: [],
    }, {
      path: 'purchase/suppliers',
      component: Suppliers,
      meta: [],
    }, {
      path: 'purchase/quality_inspections',
      component: QualityInspections,
      meta: [],
    }, {
      path: 'purchase/weighings',
      component: Weighings,
      meta: [],
    }, {
      path: 'purchase/purchase_logs',
      component: PurchaseLogs,
      meta: [],
    }, {
      path: 'product/skus',
      component: Skus,
      meta: [],
    }, {
      path: 'product/sku_suits',
      component: SkuSuits,
      meta: [],
    }, {
      path: 'product/categories',
      component: Categories,
      meta: [],
    }, {
      path: 'product/brands',
      component: Brands,
      meta: [],
    }, {
      path: 'product/product_logs',
      component: ProductLogs,
      meta: [],
    }, {
      path: 'logistics/invoices',
      component: Invoices,
      meta: [],
    }, {
      path: 'logistics/inventories',
      component: Inventories,
      meta: [],
    }, {
      path: 'logistics/warehouses',
      component: Warehouses,
      meta: [],
    }, {
      path: 'logistics/logistics_logs',
      component: LogisticsLogs,
      meta: [],
    }, {
      path: 'customerservice/customers',
      component: Customers,
      meta: [],
    }, {
      path: 'customerservice/message_templates',
      component: MessageTemplates,
      meta: [],
    }, {
      path: 'case/ebay_messages',
      component: EbayMessages,
      meta: [],
    }, {
      path: 'case/ebay_disputes',
      component: EbayDisputes,
      meta: [],
    }, {
      path: 'case/ebay_comments',
      component: EbayComments,
      meta: [],
    }, {
      path: 'case/amazon_comments',
      component: AmazonComments,
      meta: [],
    }, {
      path: 'salechannel/ebay/ebay_accounts',
      component: EbayAccounts,
      meta: [],
    }, {
      path: 'salechannel/ebay/ebay_items',
      component: EbayItems,
      meta: [],
    }, {
      path: 'salechannel/amazon/amazon_accounts',
      component: AmazonAccounts,
      meta: [],
    }, {
      path: 'salechannel/smt/smt_accounts',
      component: SmtAccounts,
      meta: [],
    }, {
      path: 'salechannel/wish/wish_accounts',
      component: WishAccounts,
      meta: [],
    }, {
      path: 'salechannel/paypal/paypal_accounts',
      component: PaypalAccounts,
      meta: [],
    }, {
      path: 'salechannel/paypal/paypal_transactions',
      component: PaypalTransactions,
      meta: [],
    }, {
      path: 'oa/departments',
      component: Departments,
      meta: [],
    }, {
      path: 'oa/works',
      component: Works,
      meta: [],
    }, {
      path: 'staff/staff',
      component: Staff,
      meta: [],
    }, {
      path: 'staff/roles',
      component: Roles,
      meta: [],
    }, {
      path: 'staff/assessments',
      component: Assessments,
      meta: [],
    }, {
      path: 'staff/attendance',
      component: Attendance,
      meta: [],
    }, {
      path: 'staff/finance/wage',
      component: Wage,
      meta: [],
    }, {
      path: 'staff/taxations',
      component: Taxations,
      meta: [],
    }, {
      path: 'staff/reimbursements',
      component: Reimbursements,
      meta: [],
    }, {
      path: 'staff/approvals',
      component: Approvals,
      meta: [],
    }, {
      path: 'training/training',
      component: Training,
      meta: [],
    }, {
      path: 'training/exams',
      component: Exams,
      meta: [],
    }, {
      path: 'tools/price_calculator',
      component: PriceCalculator,
      meta: [],
    }, {
      path: 'tools/exchange_rate_conversion',
      component: ExchangeRateConversion,
      meta: [],
    }, {
      path: 'tools/template_formatter',
      component: TemplateFormatter,
      meta: [],
    }, {
      path: 'tools/qrcode_generator',
      component: QrcodeGenerator,
      meta: [],
    }, {
      path: 'tools/messages',
      component: Messages,
      meta: [],
    }, {
      path: 'tools/calendar',
      component: Calendar,
      meta: [],
    }, {
      path: 'tools/todos',
      component: Todos,
      meta: [],
    }, {
      path: 'site/site_access',
      component: SiteAccess,
      meta: [],
    }, {
      path: 'task/taskes',
      component: Taskes,
      meta: [],
    }, {
      path: 'task/task_logs',
      component: TaskLogs,
      meta: [],
    }],
  },
];

export default new Router({
  routes,
});
