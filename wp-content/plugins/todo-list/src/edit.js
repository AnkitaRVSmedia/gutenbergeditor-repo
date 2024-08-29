/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMinus } from '@fortawesome/free-solid-svg-icons';



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

// export default function Edit() {

const Edit = (props) => {
    const { attributes, setAttributes } = props;
    const { items, accordionId } = attributes;
	const [openIndex, setOpenIndex] = useState(null);
	

    // Local state for managing items in the editor
    const [localItems, setLocalItems] = useState(items || [
        { title: 'Accordion 1', content: 'Lorem ipsum' },
        { title: 'Accordion 2', content: 'Lorem ipsum' },
    ]);

    // Update block attributes and local state
    const updateItems = (newItems) => {
        setAttributes({ items: newItems });
        setLocalItems(newItems);
    };

    // Handle adding a new item
    const addItem = () => {
        const newItem = { title: 'Accordion', content: 'Lorem Ipsum' };
        const updatedItems = [...localItems, newItem];
        updateItems(updatedItems);
    };

    // Handle removing an item
    const removeItem = (index) => {
        const updatedItems = localItems.filter((_, i) => i !== index);
        updateItems(updatedItems);
    };

    // Handle item changes
    const onChangeItem = (index, key, value) => {
        const updatedItems = [...localItems];
        updatedItems[index][key] = value;
        updateItems(updatedItems);
    };

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const handleAccordionIdChange = (newValue) => {
		setAttributes({ accordionId: newValue });
	};

    return (
        <div class="gutenberg-accordion-widget" { ...useBlockProps() }>
			<InspectorControls>
                <PanelBody title="Accordion Settings">
                    <Button className="accordion-add-item-btn" onClick={addItem}>Add Item</Button>
                </PanelBody>
				<PanelBody title="Accordion Settings">
					<TextControl
						label="Accordion ID"
						value={accordionId}
						onChange={(newValue) => setAttributes({ accordionId: newValue })}
						placeholder="Enter ID here"
					/>
            	</PanelBody>
            </InspectorControls>
            <div className="gutenberg-accordion-widget">
				<div className="accordion-container">
					{localItems.map((item, index) => (
						<div className="gutenberg-accordion-item" key={index}>
							<div className="accordion-accordion-content-main">
								<div className="accordion-title"  onClick={() => toggleAccordion(index)}>
									<RichText
										tagName="h4"
										value={item.title}
										onChange={(value) => onChangeItem(index, 'title', value)}
										placeholder="Add Accordion Title"
										className="editor-accordion-title"
									/>
										<span className="gutenberg-accordion-icon" aria-hidden="true">
											<span className={`icon-closed ${openIndex === index ? 'hidden' : ''}`}>
												<FontAwesomeIcon icon={faChevronDown} />
											</span>
											<span className={`icon-opened ${openIndex === index ? '' : 'hidden'}`}>
												<FontAwesomeIcon icon={faMinus} />
											</span>
                                   	 	</span>
									
								</div>
								<div className={`accordion-content ${openIndex === index ? 'open' : 'closed'}`}>
									<RichText
										tagName="p"
										value={item.content}
										onChange={(value) => onChangeItem(index, 'content', value)}
										placeholder="Add Content"
										className="editor-accordion-content"
									/>
								</div>
							</div>
							<div className="accordion-remove-btn">
								<Button
										isDestructive
										onClick={() => removeItem(index)}
										className="remove-item"
									>
										Remove
								</Button>
							</div>	
						</div>
					))}
				</div>	
            </div>
        </div>
    );	
};
export default Edit;
console.log('Accordion ID edit:', accordionId);

// }

