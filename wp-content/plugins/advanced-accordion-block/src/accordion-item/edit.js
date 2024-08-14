/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-shadow */
/* eslint-disable @wordpress/no-unsafe-wp-apis */
const { Fragment } = wp.element;
import {
	InnerBlocks,
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	ColorPalette,
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	__experimentalBoxControl as BoxControl,
	__experimentalBorderControl as BorderControl,
} from '@wordpress/components';
const { __ } = wp.i18n;
import {useContext, useEffect} from '@wordpress/element';

import colors from '../colors';
import icons from './icons';
import tags from '../tags';

// include editor styles
import './editor.scss';

const iconPositions = [
	{
		label: 'Left',
		value: 'aagb_left_icon',
	},
	{
		label: 'Right',
		value: 'aagb_right_icon',
	},
];
const anchorPositions = [
	{
		label: 'Left',
		value: 'aagb_left_link',
	},
	{
		label: 'Right',
		value: 'aagb_right_link',
	},
];




const Edit = ({ attributes, setAttributes, context }) => {
	const {
		makeActive,
		border,
		margins,
		paddings,
		borderRadius,
		heading,
		headingTag,
		headingColor,
		showIcon,
		iconClass,
		iconPosition,
		iconColor,
		iconBackground,
		headerBg,
		bodyBg,
		buttonShow,
		anchorPosition,
		contentCount,
		readText,
		styledQA,
		qIconText,
		qIconColor,
		qIconBg,
		aIconColor,
		aIconBg,
		aIconText,
		faqSchema,
		step,
		stepText,
		checkList,
		anchorLinkShow,
	} = attributes;

	// Generate the template for InnerBlocks based on contentCount
	const innerBlocksTemplate = Array.from(
		{ length: contentCount },
		(_, index) => [
			'core/paragraph',
			{
				content: `Content ${index + 1}`,
			},
		]
	);


	// Check if aab_premium is true
	const aab_premium 			= aagb_local_object.licensing;


	const is_disable 			= aab_premium ? '' : 'disabled';
	const anchor_link_checked 	= aab_premium ? anchorLinkShow : 'false';
	const read_more_checked 	= aab_premium ? buttonShow : 'false';
	const has_disabled_class 	= aab_premium ? '' : 'aab-pro-element';

	const hasQaStyle = context["aagb/accordion-hasQaStyle"];
	const hasFaqSchema = context["aagb/accordion-faqSchema"];
	const hasStep = context["aagb/accordion-step"];
	const hasStepText = context["aagb/accordion-stepText"];
	const hasCheckList = context["aagb/accordion-checkList"];
	const anchorLinksShow = context["aagb/accordion-anchorLinksShow"];

	useEffect(() => {
		setAttributes({ styledQA: hasQaStyle });
	}, [hasQaStyle]);

	useEffect(() => {
		setAttributes({ faqSchema: hasFaqSchema });
	}, [hasFaqSchema]);

	useEffect(() => {
		setAttributes({ step: hasStep });
	}, [hasStep]);

	useEffect(() => {
		setAttributes({ stepText: hasStepText });
	}, [hasStepText]);

	useEffect(() => {
		setAttributes({ checkList: hasCheckList });
	}, [hasCheckList]);

	useEffect(() => {
		setAttributes({ anchorLinkShow: anchorLinksShow });
	}, [anchorLinksShow]);
	

	if ( ! aab_premium ) {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.addedNodes.length) {
					mutation.addedNodes.forEach((node) => {
						// Find the button for the "Q A" style and disable it
						jQuery('.block-editor-block-styles__variants button[aria-label=aab-style-pro-checked]').attr('disabled', 'disabled');
						// add class parent .components-panel__body.is-opened
						jQuery('.block-editor-block-styles__variants button[aria-label=aab-style-pro-checked]').closest('.components-panel__body').addClass('aab-pro-element');
					});
				}
			});
		});

		// Start observing the editor for changes
		observer.observe(document.body, { childList: true, subtree: true });
	}

	return (
		<Fragment>
			<InspectorControls group="styles">

				{ hasQaStyle && aab_premium && (
					<>
					
					<PanelBody
						title={__('Q/A Icons Styles', 'advanced-accordion-block')}
						initialOpen={false}
					>
						<p className="aab__label">
							{__('Q Icon Color', 'advanced-accordion-block')}
						</p>
						<ColorPalette
							colors={colors}
							value={qIconColor}
							onChange={(qIconColor) =>
								setAttributes({ qIconColor })
							}
						/>

						<p className="aab__label">
							{__('Q Icon Background Color', 'advanced-accordion-block')}
						</p>
						<ColorPalette
							colors={colors}
							value={qIconBg}
							onChange={(qIconBg) =>
								setAttributes({ qIconBg })
							}
						/>
						<p className="aab__label">
							{__('A Icon Color', 'advanced-accordion-block')}
						</p>
						<ColorPalette
							colors={colors}
							value={aIconColor}
							onChange={(aIconColor) =>
								setAttributes({ aIconColor })
							}
						/>

						<p className="aab__label">
							{__('A Icon Background Color', 'advanced-accordion-block')}
						</p>
						<ColorPalette
							colors={colors}
							value={aIconBg}
							onChange={(aIconBg) =>
								setAttributes({ aIconBg })
							}
						/>
						
					</PanelBody>
					</>
				)}

				<PanelBody
					initialOpen={false}
					title={__('Accordion Styles', 'advanced-accordion-block')}
				>
					<BoxControl
						values={margins}
						label={__(
							'Accordion Margin',
							'advanced-accordion-block'
						)}
						sides={['top', 'bottom']}
						units={[]}
						allowReset={false}
						onChange={(newValue) =>
							setAttributes({
								...margins,
								margins: {
									top: newValue.top,
									bottom: newValue.bottom,
								},
							})
						}
					/>
					<div className="aa-custom-spacer"></div>
					<BoxControl
						values={paddings}
						label={__(
							'Content Padding',
							'advanced-accordion-block'
						)}
						sides={['horizontal', 'vertical']}
						units={[]}
						splitOnAxis={true}
						allowReset={false}
						onChange={(newValue) =>
							setAttributes({
								...paddings,
								paddings: {
									top: newValue.top,
									left: newValue.left,
									right: newValue.right,
									bottom: newValue.bottom,
								},
							})
						}
					/>
					<div className="aa-custom-spacer"></div>
					<p>{__(
						'Set Accordion Border',
						'advanced-accordion-block'
					)}</p>
					<BorderControl
						colors={colors}

						onChange={(value) => setAttributes({ border: value })}
						value={border}
						withSlider={true}
					/>
					<div className="aa-custom-spacer"></div>
					<RangeControl
						label={__('Border Radius', 'advanced-accordion-block')}
						value={borderRadius}
						onChange={(borderRadius) =>
							setAttributes({ borderRadius })
						}
						min={0}
						max={50}
					/>
				</PanelBody>


				<PanelBody
					initialOpen={false}
					title={__('Accordion Head', 'advanced-accordion-block')}
				>
					<p className="aagb__label">
						{__('Header Color', 'advanced-accordion-block')}
					</p>
					<ColorPalette
						colors={colors}
						value={headingColor}
						onChange={(headingColor) =>
							setAttributes({ headingColor })
						}
					/>
					<p className="aagb__label">
						{__('Header Background', 'advanced-accordion-block')}
					</p>
					<ColorPalette
						colors={colors}
						value={headerBg}
						onChange={(headerBg) => setAttributes({ headerBg })}
					/>

				</PanelBody>


				<PanelBody
					title={__('Accordion Icon', 'advanced-accordion-block')}
					initialOpen={false}
				>
					<ToggleControl
						label={__('Show Icon', 'advanced-accordion-block')}
						checked={showIcon}
						onChange={() => setAttributes({ showIcon: !showIcon })}
					/>
					{showIcon && (
						<Fragment>


							<p className="aagb__label">
								{__('Icon Color', 'advanced-accordion-block')}
							</p>
							<ColorPalette
								colors={colors}
								value={iconColor}
								onChange={(iconColor) =>
									setAttributes({ iconColor })
								}
							/>
							<p className="aagb__label">
								{__(
									'Icon Background',
									'advanced-accordion-block'
								)}
							</p>
							<ColorPalette
								colors={colors}
								value={iconBackground}
								onChange={(iconBackground) =>
									setAttributes({ iconBackground })
								}
							/>
						</Fragment>
					)}
				</PanelBody>


				<PanelBody
					title={__('Accordion Body', 'advanced-accordion-block')}
					initialOpen={false}
				>
					<p className="aagb__label">
						{__('Background Color', 'advanced-accordion-block')}
					</p>
					<ColorPalette
						colors={colors}
						value={bodyBg}
						onChange={(bodyBg) => setAttributes({ bodyBg })}
					/>
				</PanelBody>


			</InspectorControls>


			<InspectorControls>
				<PanelBody
					initialOpen={false}
					title={__('Accordion Status', 'advanced-accordion-block')}	
				>
					<ToggleControl
						label={__(
							'Make it active on load',
							'advanced-accordion-block'
						)}
						checked={makeActive}
						onChange={() =>
							setAttributes({ makeActive: !makeActive })
						}
					/>
				</PanelBody>

				<PanelBody
					initialOpen={false}
					title={__('Accordion Head', 'advanced-accordion-block')}
				>
					<SelectControl
						label={__(
							'Select Heading Tag',
							'advanced-accordion-block'
						)}
						options={tags}
						onChange={(headingTag) => setAttributes({ headingTag })}
						value={headingTag}
					/>
				</PanelBody>
				{anchorLinkShow && !step && (
				<PanelBody
					title={__('Anchor Link', 'advanced-accordion-block')}
					initialOpen={false}
					className={has_disabled_class}
				>

					{anchorLinkShow && !hasQaStyle && (
						<Fragment>
							<SelectControl
								label={__(
									'Anchor Icon Position',
									'advanced-accordion-block'
								)}
								disabled={is_disable}
								options={anchorPositions}
								onChange={(anchorPosition) =>
									setAttributes({
										anchorPosition,
									})
								}
								value={anchorPosition}
							/>
						</Fragment>
					)}
				</PanelBody>
					)}

				<PanelBody
					title={__('Accordion Icon', 'advanced-accordion-block')}
					initialOpen={false}
				>
					<ToggleControl
						label={__('Show Icon', 'advanced-accordion-block')}
						checked={showIcon}
						onChange={() => setAttributes({ showIcon: !showIcon })}
					/>
					{showIcon && (
						<Fragment>
							<SelectControl
								label={__(
									'Select Icon Type',
									'advanced-accordion-block'
								)}
								options={icons}
								onChange={(iconClass) => {
									setAttributes({ iconClass });
								}}
								value={iconClass}
							/>

							{ !hasQaStyle && (
							<SelectControl
								label={__(
									'Icon Position',
									'advanced-accordion-block'
								)}
								options={iconPositions}
								onChange={(iconPosition) => {
									setAttributes({ iconPosition });
								}}
								value={iconPosition}
							/>
							)}


						</Fragment>
					)}
				</PanelBody>

				<PanelBody
					title={__('Read More Button', 'advanced-accordion-block')}
					initialOpen={false}	
					className={has_disabled_class}
				>
					<ToggleControl
						label={__(
							'Button Show/Hide',
							'advanced-accordion-block'
						)}
						disabled={is_disable}
						checked={read_more_checked}
						onChange={() =>
							setAttributes({ buttonShow: !buttonShow })
						}
					/>
					{buttonShow && (
						<RangeControl
							label={__(
								'Content Count',
								'advanced-accordion-block'
							)}
							disabled={is_disable}
							value={contentCount}
							onChange={(value) =>
								setAttributes({ contentCount: value })
							}
							min={1}
							max={220} // Set the maximum count according to your requirement
						/>
					)}
				</PanelBody>

				{/*<PanelBody*/}
				{/*	title={__('Change Step text', 'advanced-accordion-block')}*/}
				{/*	initialOpen={false}*/}
				{/*	className={has_disabled_class}*/}
				{/*>*/}

				{/*	<TextControl // New TextControl*/}
				{/*		label={__('Step Text', 'advanced-accordion-block')}*/}
				{/*		value={stepText} // State variable to hold the text value*/}
				{/*		onChange={(value) => setAttributes({ stepText: value })}*/}
				{/*		help={__('Enter the text you want to display on the step.', 'advanced-accordion-block')}*/}
				{/*	/>*/}
				{/*	*/}
				{/*</PanelBody>*/}
			</InspectorControls>

			<div
				{...useBlockProps({

					className: `aagb__accordion_container ${step ? 'step' : '' } ${checkList ? 'check-list' : '' } ${makeActive ? 'aagb__accordion_active' : ''} ${hasQaStyle ? 'style-qa' : ''}`,
				})}
				style={{
					border: `${border.width} ${border.style} ${border.color}`,
					// border: `3px solid red`,
					marginTop: `${margins.top}`,
					marginBottom: `${margins.bottom}`,
					borderRadius: `${borderRadius}px`,
				}}
			>
				<div
					className={`aagb__accordion_head ${iconPosition}`}
					style={{
						color: headingColor ? headingColor : '#333333',
						backgroundColor: headerBg ? headerBg : 'transparent',
						padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
					}}
				>
					<div
						className={`aagb__accordion_heading ${iconPosition} ${
							anchorPosition || ''
						}`}
					>

						{ aab_premium && checkList && (
							<label className="checklist-label">
							<input type='checkbox' className='checklist-box'></input>
							<span></span>
							</label>
						)}
						{hasQaStyle && aab_premium && (
						<div className="icon-container">
							<div className="icon-q"
								 style={{
									 color: qIconColor,
									 backgroundColor: qIconBg
								 }}
							> {qIconText} </div>
							<div className="icon-a"

								 style={{
									 color: aIconColor,
									 backgroundColor: aIconBg,
								 }}> {aIconText} </div>
						</div>
							)}

						<RichText
							tagName={headingTag}
							value={heading}
							className="aagb__accordion_title"
							onChange={(heading) => setAttributes({ heading })}
							style={{
								margin: 0,
								color: headingColor ? headingColor : '#333333',
							}}
						/>
						{anchorLinkShow && aab_premium && !step && (
							<a className="anchorjs-link" href="#">
								<i className="dashicons dashicons-admin-links"></i>
							</a>
						)}
					</div>
					{showIcon && (
						<div
							className={`aagb__accordion_icon`}
							style={{
								color: iconColor ? iconColor : '#333333',
								backgroundColor: iconBackground
									? iconBackground
									: 'transparent',
							}}
						>
							<span
								className={`aagb__icon dashicons dashicons-${iconClass}`}
							></span>
						</div>
					)}
				</div>
				<div
					className={`aagb__accordion_body ${
						makeActive ? 'aagb__accordion_body--show' : ''
					}`}
					role="region"
					// style={{
					// 	backgroundColor: bodyBg ? bodyBg : 'transparent',
					// 	borderTop: `${border.width} ${border.style} ${border.color}`,
					// 	padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
					// }}

					style={{
						backgroundColor: bodyBg ? bodyBg : 'transparent',
						// Conditionally add borderTop if border.width, border.style, and border.color are defined
						...( ! hasQaStyle ? {
							borderTop: `${border.width} ${border.style} ${border.color}`
						} : {}),
						...( ! hasQaStyle ? {
							padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
						} : {}),

						...( hasQaStyle && ! aab_premium ? {
							padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
						} : {}),


						// padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
					}}
				>
					<InnerBlocks
						allowedBlocks={true}
						template={innerBlocksTemplate}
					/>



					{buttonShow && aab_premium && (
						<button className="aagb_button_toggle">
							<RichText
								value={readText}
								onChange={(readText) =>
									setAttributes({ readText })
								}
								style={{
									margin: 0,
								}}
							/>
						</button>
					)}



					{step && (
						<div className="continue">
							<span className="step-text">{stepText}</span>
							<span className="step-down-icon">&#8595;</span>
						</div>
					)}



				</div>
			</div>
		</Fragment>
	);
};
export default Edit;
