const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-shared',

  exposes: {
  './DataTableComponent': './src/app/shared-ui/data-table/data-table.component.ts',
  './NavBtnsComponent': './src/app/shared-ui/nav-btns/nav-btns.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
