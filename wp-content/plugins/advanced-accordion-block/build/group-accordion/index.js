/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/colors.js":
/*!***********************!*\
  !*** ./src/colors.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const {
  __
} = wp.i18n;
const colors = [{
  name: __('Black', 'advanced-accordion-block'),
  color: '#000000'
}, {
  name: __('White', 'advanced-accordion-block'),
  color: '#ffffff'
}, {
  name: __('Red', 'advanced-accordion-block'),
  color: '#ff0000'
}, {
  name: __('Green', 'advanced-accordion-block'),
  color: '#00ff00'
}, {
  name: __('Blue', 'advanced-accordion-block'),
  color: '#0000ff'
}, {
  name: __('Yellow', 'advanced-accordion-block'),
  color: '#ffff00'
}];
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./src/group-accordion/edit.js":
/*!*************************************!*\
  !*** ./src/group-accordion/edit.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/group-accordion/editor.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors */ "./src/colors.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);


/* eslint-disable @wordpress/no-unsafe-wp-apis */
// import editor style








const Edit = _ref => {
  let {
    attributes,
    setAttributes,
    clientId
  } = _ref;
  const {
    uniqueId,
    activeAccordionBorder,
    searchShow,
    showAllbtn,
    placeholderText,
    closeText,
    openText,
    spanTag,
    hasQaStyle,
    faqSchema,
    step,
    stepText,
    checkList,
    anchorLinksShow
  } = attributes;
  const [activetorClass, setActivetorClass] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('click'); // set unique ID

  setAttributes({
    uniqueId: clientId
  });

  const handleActivetorChange = value => {
    setActivetorClass(value);
    setAttributes({
      activetorClass: value
    });
  }; // Check if aab_premium is true


  const aab_premium = aagb_local_object.licensing;
  const is_disable = aab_premium ? '' : 'disabled';
  const search_checked = aab_premium ? searchShow : 'false';
  const show_close_btn_checked = aab_premium ? showAllbtn : 'false';
  const has_disabled_class = aab_premium ? '' : 'aab-pro-element';
  const anchor_link_checked = aab_premium ? anchorLinksShow : 'false';
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)();
  const qaStyle = blockProps.className.includes('is-style-qa');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAttributes({
      hasQaStyle: qaStyle
    });
  }, [qaStyle]);
  let optionsName;

  if (step) {
    optionsName = "step";
  } else if (checkList) {
    optionsName = "checkList";
  } else {
    optionsName = "none";
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.aagb_accordion_${uniqueId} .aagb__accordion_active { border: ${activeAccordionBorder.width} ${activeAccordionBorder.style} ${activeAccordionBorder.color} !important; }`, `.aagb_accordion_${uniqueId} .aagb__accordion_body { border-top: ${activeAccordionBorder.width} ${activeAccordionBorder.style} ${activeAccordionBorder.color} !important; }`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
    group: "styles"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Active Accordion Style', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "aab__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Border', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBorderControl, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    onChange: value => setAttributes({
      activeAccordionBorder: value
    }),
    value: activeAccordionBorder,
    withSlider: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Accordion Search', 'advanced-accordion-block'),
    initialOpen: false,
    className: has_disabled_class
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show Accordion Search', 'advanced-accordion-block'),
    disabled: is_disable,
    checked: search_checked // Use the state variable here
    ,
    onChange: () => setAttributes({
      searchShow: !searchShow
    })
  }), searchShow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "label-d-block"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Placeholder Text', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "widefat",
    disabled: is_disable,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Enter placeholder text', 'advanced-accordion-block'),
    value: placeholderText,
    onChange: e => setAttributes({
      placeholderText: e.target.value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Open All / Close All Button', 'advanced-accordion-block'),
    initialOpen: false,
    className: has_disabled_class
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Open All / Close All', 'advanced-accordion-block'),
    disabled: is_disable,
    checked: show_close_btn_checked // Use the state variable here
    ,
    onChange: () => setAttributes({
      showAllbtn: !showAllbtn
    })
  }), showAllbtn && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "closeText",
    className: "label-d-block"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Close All Text', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "closeText",
    type: "text",
    disabled: is_disable,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Enter text', 'advanced-accordion-block'),
    value: closeText,
    onChange: e => setAttributes({
      closeText: e.target.value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "openText",
    className: "label-d-block"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show All Text', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "openText",
    type: "text",
    disabled: is_disable,
    value: openText,
    onChange: e => setAttributes({
      openText: e.target.value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Activetor Event', 'advanced-accordion-block'),
    initialOpen: false,
    className: has_disabled_class
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
    label: "Activetor Event",
    value: activetorClass,
    onChange: handleActivetorChange
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
    value: "click",
    label: "Click",
    disabled: is_disable,
    showTooltip: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
    value: "hover",
    disabled: is_disable,
    label: "Hover"
  }))), !step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Anchors Link', 'advanced-accordion-block'),
    initialOpen: false,
    className: has_disabled_class
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show Anchor Link', 'advanced-accordion-block') // pass disable variable here
    ,
    disabled: is_disable,
    checked: anchor_link_checked // Use the state variable here
    ,
    onChange: () => setAttributes({
      anchorLinksShow: !anchorLinksShow
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('FAQ Schema', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Make it enable', 'advanced-accordion-block'),
    checked: faqSchema,
    onChange: () => setAttributes({
      faqSchema: !faqSchema
    })
  })), aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Steps or Checklist', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: "Options",
    help: "Please select a option.",
    selected: optionsName,
    options: [{
      label: 'Steps',
      value: "step"
    }, {
      label: 'Checklist',
      value: "checkList"
    }, {
      label: 'None',
      value: "none"
    }],
    onChange: value => {
      if (value === 'step') {
        setAttributes({
          checkList: false
        });
        setAttributes({
          step: true
        });
      } else if (value === 'checkList') {
        setAttributes({
          step: false
        });
        setAttributes({
          checkList: true
        });
      } else {
        setAttributes({
          step: false
        });
        setAttributes({
          checkList: false
        });
      }
    }
  })), aab_premium && step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Change Step text', 'advanced-accordion-block'),
    initialOpen: false,
    className: has_disabled_class
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl // New TextControl
  , {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Step Text', 'advanced-accordion-block'),
    value: stepText // State variable to hold the text value
    ,
    onChange: value => setAttributes({
      stepText: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Enter the text you want to display on the step.', 'advanced-accordion-block')
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    className: `aagb_accordion_${uniqueId}`
  }), searchShow && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "aagb_form_inner",
    id: "aagb-search-form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "aagb_form_group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "aagb-search-id",
    type: "text",
    className: "aagb_form_control noEnterSubmit",
    disabled: is_disable,
    placeholder: placeholderText || 'Search for FAQ',
    value: placeholderText,
    onChange: e => setAttributes({
      placeholderText: e.target.value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    id: "aagb-search-help-block",
    className: "help-block"
  })), showAllbtn && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "aagb_accordion_wrapper_btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "content-accordion__close-all"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    class: "svg-inline--fa fa-compress-alt fa-w-14",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "compress-alt",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    d: "M4.686 427.314L104 328l-32.922-31.029C55.958 281.851 66.666 256 88.048 256h112C213.303 256 224 266.745 224 280v112c0 21.382-25.803 32.09-40.922 16.971L152 376l-99.314 99.314c-6.248 6.248-16.379 6.248-22.627 0L4.686 449.941c-6.248-6.248-6.248-16.379 0-22.627zM443.314 84.686L344 184l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C234.697 256 224 245.255 224 232V120c0-21.382 25.803-32.09 40.922-16.971L296 136l99.314-99.314c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.248 6.248 6.248 16.379 0 22.627z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText.Content, {
    value: closeText,
    style: {
      margin: 0
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "content-accordion__show-all"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    class: "svg-inline--fa fa-expand-alt fa-w-14",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "expand-alt",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    d: "M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText.Content, {
    value: openText,
    style: {
      margin: 0
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks, {
    allowedBlocks: ['aab/accordion-item'],
    template: [['aab/accordion-item']]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/group-accordion/icon.js":
/*!*************************************!*\
  !*** ./src/group-accordion/icon.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "17px",
  height: "17px",
  viewBox: "0 0 17 17",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0v17h17v-17h-17zM16 1v9h-15v-9h15zM16 11v2h-15v-2h15zM1 16v-2h15v2h-15z",
  fill: "#77b5f7"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/group-accordion/save.js":
/*!*************************************!*\
  !*** ./src/group-accordion/save.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);





const Save = _ref => {
  let {
    attributes
  } = _ref;
  const {
    uniqueId,
    searchShow,
    showAllbtn,
    placeholderText,
    closeText,
    openText,
    activetorClass,
    faqSchema,
    step
  } = attributes;
  const aab_premium = aagb_local_object.licensing;
  const activetorClassEvent = aab_premium ? activetorClass : 'click';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, searchShow && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aagb_form_inner",
    id: "aagb-search-form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aagb_form_group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    id: "aagb-search-id",
    type: "text",
    className: "aagb_form_control noEnterSubmit",
    placeholder: placeholderText || 'Search for FAQ'
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    id: "aagb-search-help-block",
    className: "help-block"
  })), showAllbtn && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aagb_accordion_wrapper_btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: "#",
    className: "content-accordion__close-all"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    class: "svg-inline--fa fa-compress-alt fa-w-14",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "compress-alt",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    fill: "currentColor",
    d: "M4.686 427.314L104 328l-32.922-31.029C55.958 281.851 66.666 256 88.048 256h112C213.303 256 224 266.745 224 280v112c0 21.382-25.803 32.09-40.922 16.971L152 376l-99.314 99.314c-6.248 6.248-16.379 6.248-22.627 0L4.686 449.941c-6.248-6.248-6.248-16.379 0-22.627zM443.314 84.686L344 184l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C234.697 256 224 245.255 224 232V120c0-21.382 25.803-32.09 40.922-16.971L296 136l99.314-99.314c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.248 6.248 6.248 16.379 0 22.627z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: closeText,
    style: {
      margin: 0
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: "#",
    className: "content-accordion__show-all"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    class: "svg-inline--fa fa-expand-alt fa-w-14",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "expand-alt",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    fill: "currentColor",
    d: "M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: openText,
    style: {
      margin: 0
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `searchable aagb_accordion_${uniqueId} ${activetorClassEvent}`
  }), faqSchema ? {
    itemScope: true,
    itemType: "https://schema.org/FAQPage"
  } : {}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/group-accordion/editor.scss":
/*!*****************************************!*\
  !*** ./src/group-accordion/editor.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/group-accordion/block.json":
/*!****************************************!*\
  !*** ./src/group-accordion/block.json ***!
  \****************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"aab/group-accordion","version":"0.1.0","title":"Group Accordion","category":"accordion-block","description":"Build Accordion and FAQs Easily.","supports":{"html":false,"anchor":true},"example":{"attributes":{"heading":"Accordion Heading"}},"providesContext":{"aagb/accordion-step":"step","aagb/accordion-hasQaStyle":"hasQaStyle","aagb/accordion-faqSchema":"faqSchema","aagb/accordion-stepText":"stepText","aagb/accordion-checkList":"checkList","aagb/accordion-anchorLinksShow":"anchorLinksShow"},"attributes":{"anchorLinksShow":{"type":"boolean","default":false},"hasQaStyle":{"type":"boolean","default":false},"uniqueId":{"type":"string"},"activeAccordionBorder":{"type":"object","default":{"width":"1px","color":"#77b5f7","style":"solid"}},"searchShow":{"type":"boolean","default":false},"showAllbtn":{"type":"boolean","default":false},"closeText":{"type":"string","default":"Close all"},"openText":{"type":"string","default":"Show all"},"heading":{"type":"string","default":"Accordion Heading"},"activetorClass":{"type":"string","default":"click"},"faqSchema":{"type":"boolean","default":false},"step":{"type":"boolean","default":false},"stepText":{"type":"string","default":"Continue"},"checkList":{"type":"boolean","default":false}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"qa","label":"Q A"},{"name":"aab-style-pro-checked","label":"aab-style-pro-checked"}],"textdomain":"advanced-accordion-block","editorScript":["file:./index.js","aagb-anchor","aagb-separate-accordion","aagb-accordion-group"],"editorStyle":"file:./index.css","style":["aagb-group-accordion"],"viewScript":["aagb-anchor","aagb-separate-accordion","aagb-accordion-group","aagb-group-accordion-frontend"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************************!*\
  !*** ./src/group-accordion/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/group-accordion/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/group-accordion/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/group-accordion/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/group-accordion/icon.js");


/**
 * Internal dependencies
 */


 // icon


/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  icon: {
    src: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
    foreground: '#77b5f7'
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map