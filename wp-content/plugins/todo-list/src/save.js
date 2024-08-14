/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
// export default function save() {

const Save = ({ attributes: { items } }) => {
    const blockProps = useBlockProps.save();

    return (
        <div className="gutenberg-accordion-widget" { ...blockProps }>
            {/* Parent div wrapping all accordion items */}
            <div className="accordion-container">
                {items.map((item, index) => (
                    <div className="gutenberg-accordion-item" key={index}>
                        <div className="accordion-title"  onClick={() => toggleAccordion(index)}>
                            <RichText.Content
                                tagName="h4" // Set to h4 for the title
                                value={item.title}
                                onChange={(value) => onChangeItem(index, 'title', value)}
                                className="title" // Add a class for styling
                            />
                        </div>
                        <div className="accordion-content">
                            <RichText.Content
                                tagName="p" // Set to p for the content
                                value={item.content}
                                className="content" // Add a class for styling
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Save;


