<?php

/**
 * @file
 * Display Suite example layout configuration.
 */

function ds_HT3() {
  return array(
    'label' => t('HT3'),
    'regions' => array(
	  'header' => t('Header'),
      'left' => t('Left'),
	  'middle' => t('Middle'),
      'right' => t('Right'),
	  'leftmiddle' => t('Left Middle'),
	  'middlemiddle' => t('Middle Middle'),
      'rightmiddle' => t('Right Middle'),
	  'leftbottom' => t('Left Bottom'),
	  'middlebottom' => t('Middle Bottom'),
      'rightbottom' => t('Right Bottom'),
	  'notes' => t('Notes'),
	  'footer' => t('Footer')
    ),
    // Uncomment if you want to include a CSS file for this layout (example_layout.css)
    'css' => TRUE,
    // Uncomment if this is a template for a node form.
    // 'form' => TRUE,
  );
}
