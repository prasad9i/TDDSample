#!/bin/bash

mkdir -p sap/ui/thirdparty
mkdir -p sap/ui/qunit
mkdir -p sap/ui/core

wget https://sapui5.netweaver.ondemand.com/resources/sap-ui-core.js -O sap-ui-core.js
wget https://sapui5.netweaver.ondemand.com/resources/sap/ui/thirdparty/qunit.js -O sap/ui/thirdparty/qunit.js
wget https://sapui5.netweaver.ondemand.com/resources/sap/ui/qunit/qunit-css.js -O sap/ui/qunit/qunit-css.js
wget https://sapui5.netweaver.ondemand.com/resources/sap/ui/qunit/qunit-junit.js -O sap/ui/qunit/qunit-junit.js
wget https://sapui5.netweaver.ondemand.com/resources/sap/ui/qunit/qunit-coverage.js -O sap/ui/qunit/qunit-coverage.js
wget https://sapui5.netweaver.ondemand.com/resources/sap/ui/thirdparty/sinon.js -O sap/ui/thirdparty/sinon.js
wget https://sapui5.netweaver.ondemand.com/resources/sap/ui/thirdparty/sinon-qunit.js -O sap/ui/thirdparty/sinon.js
wget https://sapui5.netweaver.ondemand.com/resources/sap/ui/thirdparty/qunit.css -O sap/ui/thirdparty/qunit.css
wget https://sapui5.netweaver.ondemand.com/resources/sap/ui/thirdparty/qunit-reporter-junit.js -O sap/ui/thirdparty/qunit-reporter-junit.js
wget https://sapui5.netweaver.ondemand.com/resources/sap/ui/core/library-preload.js -O sap/ui/core/library-preload.js
wget https://sapui5.netweaver.ondemand.com/resources/sap/ui/core/library-preload.json -O sap/ui/core/library-preload.json