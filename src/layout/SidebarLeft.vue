<template>
  <div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
      <div id="sidebar-menu" class="sidebar-menu">
        <ul>
          <li class="submenu-open">
            <h6 class="submenu-hdr">Main</h6>
            <ul>
              <li class="submenu">
                <RouterLink to="/dashboard" class="subdrop active"><i
                    data-feather="grid"></i><span>Dashboard</span><span class="menu-arrow"></span>
                </RouterLink>
                <!-- <ul>
                  <li><a href="index.html" class="active">Admin Dashboard</a></li>
                  <li><a href="sales-dashboard.html">Sales Dashboard</a></li>
                </ul> -->
              </li>
              <!-- <li class="submenu">
              <a href="javascript:void(0);"><i
                  data-feather="smartphone"></i><span>Application</span><span
                  class="menu-arrow"></span></a>
              <ul>
                <li><a href="chat.html">Chat</a></li>
                <li class="submenu submenu-two"><a href="javascript:void(0);">Call<span
                      class="menu-arrow inside-submenu"></span></a>
                  <ul>
                    <li><a href="video-call.html">Video Call</a></li>
                    <li><a href="audio-call.html">Audio Call</a></li>
                    <li><a href="call-history.html">Call History</a></li>
                  </ul>
                </li>
                <li><a href="calendar.html">Calendar</a></li>
                <li><a href="email.html">Email</a></li>
                <li><a href="todo.html">To Do</a></li>
                <li><a href="notes.html">Notes</a></li>
                <li><a href="file-manager.html">File Manager</a></li>
                <li><a href="social-feed.html">Social Feed</a></li>
                <li><a href="kanban-view.html">Kanban</a></li>
              </ul>
            </li> -->
            </ul>
          </li>
          <li class="submenu-open">
            <h6 class="submenu-hdr">Inventory</h6>
            <ul>
              <li>
                <RouterLink to="/products"><i data-feather="box"></i><span>Products</span></RouterLink>
              </li>
              <!-- <li><a href="add-product.html"><i data-feather="plus-square"></i><span>Create
                    Product</span></a></li>

              <li><a href="expired-products.html"><i data-feather="codesandbox"></i><span>Expired
                  Products</span></a></li>
            <li><a href="low-stocks.html"><i data-feather="trending-down"></i><span>Low
                  Stocks</span></a></li> -->

              <li>
                <RouterLink to="/categories"><i data-feather="codepen"></i><span>Category</span></RouterLink>
              </li>

              <!-- <li><a href="sub-categories.html"><i data-feather="speaker"></i><span>Sub
                  Category</span></a></li> -->

              <!-- <li><a href="brand-list.html"><i data-feather="tag"></i><span>Brands</span></a></li>
            <li><a href="units.html"><i data-feather="speaker"></i><span>Units</span></a></li>
            <li><a href="varriant-attributes.html"><i data-feather="layers"></i><span>Variant
                  Attributes</span></a></li>
            <li><a href="warranty.html"><i data-feather="bookmark"></i><span>Warranties</span></a>
            </li>
            <li><a href="barcode.html"><i data-feather="align-justify"></i><span>Print
                  Barcode</span></a></li>
            <li><a href="qrcode.html"><i data-feather="maximize"></i><span>Print QR Code</span></a>
            </li> -->
            </ul>
          </li>
          <li class="submenu-open">
            <h6 class="submenu-hdr">Stock</h6>
            <ul>
              <li><RouterLink to="/stocks"><i data-feather="package"></i><span>Manage
                    Stock</span></RouterLink></li>

              <!-- <li><a href="stock-adjustment.html"><i data-feather="clipboard"></i><span>Stock
                  Adjustment</span></a></li>
            <li><a href="stock-transfer.html"><i data-feather="truck"></i><span>Stock
                  Transfer</span></a></li> -->
            </ul>
          </li>
          <li class="submenu-open">
            <h6 class="submenu-hdr">Orders</h6>
            <ul>
              <li>
                <RouterLink to="/orders"><i data-feather="shopping-cart"></i><span>Orders</span></RouterLink>
              </li>
              <li><RouterLink to="/orderDetails"><i data-feather="file-text"></i><span>Order Details</span></RouterLink></li>

              <!-- <li><a href="sales-returns.html"><i data-feather="copy"></i><span>Sales
                  Return</span></a></li>
            <li><a href="quotation-list.html"><i data-feather="save"></i><span>Quotation</span></a>
            </li>
            <li><a href="pos.html"><i data-feather="hard-drive"></i><span>POS</span></a></li> -->
            </ul>
          </li>
          <!-- <li class="submenu-open">
          <h6 class="submenu-hdr">Promo</h6>
          <ul>
            <li><a href="coupons.html"><i data-feather="shopping-cart"></i><span>Coupons</span></a>
            </li>
          </ul>
        </li> -->
          <li class="submenu-open">
            <h6 class="submenu-hdr">Purchases</h6>
            <ul>
              <li><RouterLink to="/purchase"><i data-feather="shopping-bag"></i><span>Purchases</span></RouterLink></li>
              <li>
                <RouterLink to="/purchaseDetails"><i data-feather="file-minus"></i><span>Purchase
                    Details</span></RouterLink>
              </li>
              <li><a href="purchase-returns.html"><i data-feather="refresh-cw"></i><span>Purchase
                    Return</span></a></li>
            </ul>
          </li>
          <!-- <li class="submenu-open">
          <h6 class="submenu-hdr">Finance & Accounts</h6>
          <ul>
            <li class="submenu">
              <a href="javascript:void(0);"><i
                  data-feather="file-text"></i><span>Expenses</span><span
                  class="menu-arrow"></span></a>
              <ul>
                <li><a href="expense-list.html">Expenses</a></li>
                <li><a href="expense-category.html">Expense Category</a></li>
              </ul>
            </li>
          </ul>
        </li> -->
          <li class="submenu-open">
            <h6 class="submenu-hdr">Peoples</h6>
            <ul>
              <li>
                <RouterLink to="/customers"><i data-feather="user"></i><span>Customers</span></RouterLink>
              </li>
              <li>
                <RouterLink to="/suppliers"><i data-feather="users"></i><span>Suppliers</span></RouterLink>
              </li>
              <!-- <li><a href="store-list.html"><i data-feather="home"></i><span>Stores</span></a></li>
            <li><a href="warehouse.html"><i data-feather="archive"></i><span>Warehouses</span></a>
            </li> -->
            </ul>
          </li>
          <!-- <li class="submenu-open">
          <h6 class="submenu-hdr">HRM</h6>
          <ul>
            <li><a href="employees-grid.html"><i data-feather="user"></i><span>Employees</span></a>
            </li>
            <li><a href="department-grid.html"><i
                  data-feather="users"></i><span>Departments</span></a></li>
            <li><a href="designation.html"><i
                  data-feather="git-merge"></i><span>Designation</span></a></li>
            <li><a href="shift.html"><i data-feather="shuffle"></i><span>Shifts</span></a></li>
            <li class="submenu">
              <a href="javascript:void(0);"><i
                  data-feather="book-open"></i><span>Attendence</span><span
                  class="menu-arrow"></span></a>
              <ul>
                <li><a href="attendance-employee.html">Employee</a></li>
                <li><a href="attendance-admin.html">Admin</a></li>
              </ul>
            </li>
            <li class="submenu">
              <a href="javascript:void(0);"><i
                  data-feather="calendar"></i><span>Leaves</span><span
                  class="menu-arrow"></span></a>
              <ul>
                <li><a href="leaves-admin.html">Admin Leaves</a></li>
                <li><a href="leaves-employee.html">Employee Leaves</a></li>
                <li><a href="leave-types.html">Leave Types</a></li>
              </ul>
            </li>
            <li><a href="holidays.html"><i data-feather="credit-card"></i><span>Holidays</span></a>
            </li>
            <li class="submenu">
              <a href="payroll-list.html"><i
                  data-feather="dollar-sign"></i><span>Payroll</span><span
                  class="menu-arrow"></span></a>
              <ul>
                <li><a href="payroll-list.html">Employee Salary</a></li>
                <li><a href="payslip.html">Payslip</a></li>
              </ul>
            </li>
          </ul>
        </li> -->
          <li class="submenu-open">
            <h6 class="submenu-hdr">Reports</h6>
            <ul>
              <li>
                <RouterLink to="/orderReport"><i data-feather="bar-chart-2"></i><span>Orders
                    Report</span></RouterLink>
              </li>
              <li>
                <RouterLink to="/purchaseReport"><i data-feather="pie-chart"></i><span>Purchase
                    report</span></RouterLink>
              </li>
              <li><a href="inventory-report.html"><i data-feather="inbox"></i><span>Stocks
                    Report</span></a></li>


              <!-- <li><a href="invoice-report.html"><i data-feather="file"></i><span>Invoice
                  Report</span></a></li>
            <li><a href="supplier-report.html"><i data-feather="user-check"></i><span>Supplier
                  Report</span></a></li>
            <li><a href="customer-report.html"><i data-feather="user"></i><span>Customer
                  Report</span></a></li>
            <li><a href="expense-report.html"><i data-feather="file"></i><span>Expense
                  Report</span></a></li>
            <li><a href="income-report.html"><i data-feather="bar-chart"></i><span>Income
                  Report</span></a></li>
            <li><a href="tax-reports.html"><i data-feather="database"></i><span>Tax
                  Report</span></a></li>
            <li><a href="profit-and-loss.html"><i data-feather="pie-chart"></i><span>Profit &
                  Loss</span></a></li> -->
            </ul>
          </li>
          <li class="submenu-open">
            <h6 class="submenu-hdr">User Management</h6>
            <ul>
              <li>
                <RouterLink to="/users"><i data-feather="user-check"></i><span>Users</span></RouterLink>
              </li>
              <li><a href="roles-permissions.html"><i data-feather="shield"></i><span>Roles &
                    Permissions</span></a></li>
              <li><a href="delete-account.html"><i data-feather="lock"></i><span>Delete Account
                    Request</span></a></li>
            </ul>
          </li>


          <li class="submenu-open">
            <h6 class="submenu-hdr">Settings</h6>
            <ul>
              <!-- <li class="submenu">
                <a href="javascript:void(0);"><i data-feather="settings"></i><span>General
                    Settings</span><span class="menu-arrow"></span></a>
                <ul>
                  <li><a href="general-settings.html">Profile</a></li>
                  <li><a href="security-settings.html">Security</a></li>
                  <li><a href="notification.html">Notifications</a></li>
                  <li><a href="connected-apps.html">Connected Apps</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0);"><i data-feather="globe"></i><span>Website
                    Settings</span><span class="menu-arrow"></span></a>
                <ul>
                  <li><a href="system-settings.html">System Settings</a></li>
                  <li><a href="company-settings.html">Company Settings </a></li>
                  <li><a href="localization-settings.html">Localization</a></li>
                  <li><a href="prefixes.html">Prefixes</a></li>
                  <li><a href="preference.html">Preference</a></li>
                  <li><a href="appearance.html">Appearance</a></li>
                  <li><a href="social-authentication.html">Social Authentication</a></li>
                  <li><a href="language-settings.html">Language</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0);"><i data-feather="smartphone"></i>
                  <span>App Settings</span><span class="menu-arrow"></span>
                </a>
                <ul>
                  <li><a href="invoice-settings.html">Invoice</a></li>
                  <li><a href="printer-settings.html">Printer</a></li>
                  <li><a href="pos-settings.html">POS</a></li>
                  <li><a href="custom-fields.html">Custom Fields</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0);"><i data-feather="monitor"></i>
                  <span>System Settings</span><span class="menu-arrow"></span>
                </a>
                <ul>
                  <li><a href="email-settings.html">Email</a></li>
                  <li><a href="sms-gateway.html">SMS Gateways</a></li>
                  <li><a href="otp-settings.html">OTP</a></li>
                  <li><a href="gdpr-settings.html">GDPR Cookies</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0);"><i data-feather="dollar-sign"></i>
                  <span>Settings</span><span class="menu-arrow"></span>
                </a>
                <ul>
                  <li><a href="payment-gateway-settings.html">Payment Gateway</a></li>
                  <li><a href="bank-settings-grid.html">Bank Accounts</a></li>
                  <li><a href="tax-rates.html">Tax Rates</a></li>
                  <li><a href="currency-settings.html">Currencies</a></li>
                </ul>
              </li>
              <li class="submenu">
                <a href="javascript:void(0);"><i data-feather="hexagon"></i>
                  <span>Other Settings</span><span class="menu-arrow"></span>
                </a>
                <ul>
                  <li><a href="storage-settings.html">Storage</a></li>
                  <li><a href="ban-ip-address.html">Ban IP Address</a></li>
                </ul>
              </li> -->
              <li>
                <a @click="logout"><i data-feather="log-out"></i><span>Logout</span> </a>
              </li>
            </ul>
          </li>
          <!-- <li class="submenu-open">
          <h6 class="submenu-hdr">UI Interface</h6>
          <ul>
            <li class="submenu">
              <a href="javascript:void(0);">
                <i data-feather="layers"></i><span>Base UI</span><span
                  class="menu-arrow"></span>
              </a>
              <ul>
                <li><a href="ui-alerts.html">Alerts</a></li>
                <li><a href="ui-accordion.html">Accordion</a></li>
                <li><a href="ui-avatar.html">Avatar</a></li>
                <li><a href="ui-badges.html">Badges</a></li>
                <li><a href="ui-borders.html">Border</a></li>
                <li><a href="ui-buttons.html">Buttons</a></li>
                <li><a href="ui-buttons-group.html">Button Group</a></li>
                <li><a href="ui-breadcrumb.html">Breadcrumb</a></li>
                <li><a href="ui-cards.html">Card</a></li>
                <li><a href="ui-carousel.html">Carousel</a></li>
                <li><a href="ui-colors.html">Colors</a></li>
                <li><a href="ui-dropdowns.html">Dropdowns</a></li>
                <li><a href="ui-grid.html">Grid</a></li>
                <li><a href="ui-images.html">Images</a></li>
                <li><a href="ui-lightbox.html">Lightbox</a></li>
                <li><a href="ui-media.html">Media</a></li>
                <li><a href="ui-modals.html">Modals</a></li>
                <li><a href="ui-offcanvas.html">Offcanvas</a></li>
                <li><a href="ui-pagination.html">Pagination</a></li>
                <li><a href="ui-popovers.html">Popovers</a></li>
                <li><a href="ui-progress.html">Progress</a></li>
                <li><a href="ui-placeholders.html">Placeholders</a></li>
                <li><a href="ui-rangeslider.html">Range Slider</a></li>
                <li><a href="ui-spinner.html">Spinner</a></li>
                <li><a href="ui-sweetalerts.html">Sweet Alerts</a></li>
                <li><a href="ui-nav-tabs.html">Tabs</a></li>
                <li><a href="ui-toasts.html">Toasts</a></li>
                <li><a href="ui-tooltips.html">Tooltips</a></li>
                <li><a href="ui-typography.html">Typography</a></li>
                <li><a href="ui-video.html">Video</a></li>
                <li><a href="ui-sortable.html">Sortable</a></li>
                <li><a href="ui-swiperjs.html">Swiperjs</a></li>
              </ul>
            </li>
            <li class="submenu">
              <a href="javascript:void(0);">
                <i data-feather="layers"></i><span>Advanced UI</span><span
                  class="menu-arrow"></span>
              </a>
              <ul>
                <li><a href="ui-ribbon.html">Ribbon</a></li>
                <li><a href="ui-clipboard.html">Clipboard</a></li>
                <li><a href="ui-drag-drop.html">Drag & Drop</a></li>
                <li><a href="ui-rangeslider.html">Range Slider</a></li>
                <li><a href="ui-rating.html">Rating</a></li>
                <li><a href="ui-text-editor.html">Text Editor</a></li>
                <li><a href="ui-counter.html">Counter</a></li>
                <li><a href="ui-scrollbar.html">Scrollbar</a></li>
                <li><a href="ui-stickynote.html">Sticky Note</a></li>
                <li><a href="ui-timeline.html">Timeline</a></li>
              </ul>
            </li>
            <li class="submenu">
              <a href="javascript:void(0);"><i data-feather="bar-chart-2"></i>
                <span>Charts</span><span class="menu-arrow"></span>
              </a>
              <ul>
                <li><a href="chart-apex.html">Apex Charts</a></li>
                <li><a href="chart-c3.html">Chart C3</a></li>
                <li><a href="chart-js.html">Chart Js</a></li>
                <li><a href="chart-morris.html">Morris Charts</a></li>
                <li><a href="chart-flot.html">Flot Charts</a></li>
                <li><a href="chart-peity.html">Peity Charts</a></li>
              </ul>
            </li>
            <li class="submenu">
              <a href="javascript:void(0);"><i data-feather="database"></i>
                <span>Icons</span><span class="menu-arrow"></span>
              </a>
              <ul>
                <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
                <li><a href="icon-feather.html">Feather Icons</a></li>
                <li><a href="icon-ionic.html">Ionic Icons</a></li>
                <li><a href="icon-material.html">Material Icons</a></li>
                <li><a href="icon-pe7.html">Pe7 Icons</a></li>
                <li><a href="icon-simpleline.html">Simpleline Icons</a></li>
                <li><a href="icon-themify.html">Themify Icons</a></li>
                <li><a href="icon-weather.html">Weather Icons</a></li>
                <li><a href="icon-typicon.html">Typicon Icons</a></li>
                <li><a href="icon-flag.html">Flag Icons</a></li>
                <li><a href="icon-tabler.html">Tabler Icons</a></li>
                <li><a href="icon-bootstrap.html">Bootstrap Icons</a></li>
                <li><a href="icon-remix.html">Remix Icons</a></li>
              </ul>
            </li>
            <li class="submenu">
              <a href="javascript:void(0);">
                <i data-feather="edit"></i><span>Forms</span><span class="menu-arrow"></span>
              </a>
              <ul>
                <li class="submenu submenu-two">
                  <a href="javascript:void(0);">Form Elements<span
                      class="menu-arrow inside-submenu"></span></a>
                  <ul>
                    <li><a href="form-basic-inputs.html">Basic Inputs</a></li>
                    <li><a href="form-checkbox-radios.html">Checkbox & Radios</a></li>
                    <li><a href="form-input-groups.html">Input Groups</a></li>
                    <li><a href="form-grid-gutters.html">Grid & Gutters</a></li>
                    <li><a href="form-select.html">Form Select</a></li>
                    <li><a href="form-mask.html">Input Masks</a></li>
                    <li><a href="form-fileupload.html">File Uploads</a></li>
                  </ul>
                </li>
                <li class="submenu submenu-two">
                  <a href="javascript:void(0);">Layouts<span
                      class="menu-arrow inside-submenu"></span></a>
                  <ul>
                    <li><a href="form-horizontal.html">Horizontal Form</a></li>
                    <li><a href="form-vertical.html">Vertical Form</a></li>
                    <li><a href="form-floating-labels.html">Floating Labels</a></li>
                  </ul>
                </li>
                <li><a href="form-validation.html">Form Validation</a></li>
                <li><a href="form-select2.html">Select2</a></li>
                <li><a href="form-wizard.html">Form Wizard</a></li>
                <li><a href="form-pickers.html">Form Picker</a></li>
              </ul>
            </li>
            <li class="submenu">
              <a href="javascript:void(0);"><i data-feather="columns"></i><span>Tables</span><span
                  class="menu-arrow"></span></a>
              <ul>
                <li><a href="tables-basic.html">Basic Tables </a></li>
                <li><a href="data-tables.html">Data Table </a></li>
              </ul>
            </li>
            <li class="submenu">
              <a href="javascript:void(0);"><i data-feather="map"></i><span>Maps</span><span
                  class="menu-arrow"></span></a>
              <ul>
                <li><a href="maps-vector.html">Vector</a></li>
                <li><a href="maps-leaflet.html">Leaflet</a></li>
              </ul>
            </li>
          </ul>
        </li> -->
          <li class="submenu-open">
            <h6 class="submenu-hdr">Help</h6>
            <ul>
              <li><a href="javascript:void(0);"><i data-feather="file-text"></i><span>Documentation</span></a></li>
              <li><a href="javascript:void(0);"><i data-feather="lock"></i><span>Changelog
                    v2.0.8</span></a></li>
              <li class="submenu">
                <a href="javascript:void(0);"><i data-feather="file-minus"></i><span>Multi
                    Level</span><span class="menu-arrow"></span></a>
                <ul>
                  <li><a href="javascript:void(0);">Level 1.1</a></li>
                  <li class="submenu submenu-two"><a href="javascript:void(0);">Level 1.2<span
                        class="menu-arrow inside-submenu"></span></a>
                    <ul>
                      <li><a href="javascript:void(0);">Level 2.1</a></li>
                      <li class="submenu submenu-two submenu-three"><a href="javascript:void(0);">Level 2.2<span
                            class="menu-arrow inside-submenu inside-submenu-two"></span></a>
                        <ul>
                          <li><a href="javascript:void(0);">Level 3.1</a></li>
                          <li><a href="javascript:void(0);">Level 3.2</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/store/AuthStore';
import { RouterLink, useRouter } from 'vue-router';


const auth = useAuthStore();
const router = useRouter()

const logout = () => {
  try {
    auth.logout()
    router.push('/login')
  } catch (error) {
    console.log(error);

  }


}
</script>

<style></style>