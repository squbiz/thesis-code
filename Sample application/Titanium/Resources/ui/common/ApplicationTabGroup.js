function ApplicationTabGroup(Window) {
    var AddPicturesTab = require('ui/common/AddPicturesTab')
    var OldOrdersTab = require('ui/common/OldOrdersTab')
    var OrderDetailView = require('ui/common/OrderDetailView')

    var self = Ti.UI.createTabGroup();

    var dummyCurrentOrder = {
        id: -1, // will not trigger any order-update-* events
        pictureIds: [],
        storeId: null,
        submissionDate: null
    }

    // Create this first so that it can listen to update-order-* events
    var win3 = new OrderDetailView(dummyCurrentOrder, true) // currentOrder

    var win1 = new OldOrdersTab(),
        win2 = new AddPicturesTab()

    var tab1 = Ti.UI.createTab({
        title: L('oldOrders'),
        icon: '/images/KS_nav_ui.png',
        window: win1
    });
    win1.containingTab = tab1;

    var tab2 = Ti.UI.createTab({
        title: L('addPictures'),
        icon: '/images/KS_nav_ui.png',
        window: win2
    });
    win2.containingTab = tab2;

    var tab3 = Ti.UI.createTab({
        title: L('currentOrder'),
        icon: '/images/KS_nav_ui.png',
        window: win3
    });
    win3.containingTab = tab3;

    self.addTab(tab1);
    self.addTab(tab2);
    self.addTab(tab3);

    return self;
};

module.exports = ApplicationTabGroup;
