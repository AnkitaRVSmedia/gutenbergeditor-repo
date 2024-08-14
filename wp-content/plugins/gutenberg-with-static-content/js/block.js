
/*
Static block element JS
*/

// alert("gutenberg-script enqueued");
// console("this is custom gutenberg element script");

// wp.blocks.registerBlockType('ideapro/custom-block', {
//     title: 'Company Contact Infomration',
//     icon: 'hammer', 
//     category: 'design',
//     attributes: {
//         companyName: { type: 'string' },
//         companyPhone: { type: 'string'},
//         companyAddress: { type: 'string'}, 
//         companyAddress2: { type: 'string'},
//         companyCity: { type: 'string' }, 
//         companyState: { type: 'string' }, 
//         companyZip: { type: 'string'}
//     },
   
//     edit: function (props){
//         return 
//                 import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//         /*#__PURE__*/_jsxs("div", {
//         children: [/*#__PURE__*/_jsx("label", {
//             for: "fname",
//             children: "First name:"
//         }), /*#__PURE__*/_jsx("input", {
//             type: "text",
//             id: "fname",
//             name: "fname",
//             value: "John"
//         }), /*#__PURE__*/_jsx("label", {
//             for: "lname",
//             children: "Last name:"
//         }), /*#__PURE__*/_jsx("input", {
//             type: "text",
//             id: "lname",
//             name: "lname",
//             value: "Doe"
//         })]
//         });
//     },
//     save: function(props) { 
//         return null;
//       }
// })
    

import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

// Register the block
registerBlockType('my-custom-block/custom-block', {
    title: 'Custom Block',
    icon: 'smiley',
    category: 'design',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const { content } = attributes;

        return (
            <Fragment>
                <RichText
                    tagName="p"
                    value={ content }
                    onChange={( newContent ) => setAttributes({ content: newContent })}
                    placeholder="Write your content here..."
                />  
            </Fragment>
        );
    },
    save: ({ attributes }) => {
        const { content } = attributes;

        return (
            <p>{ content }</p>
        );
    },
});
