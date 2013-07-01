<?php
/**
 * @file
 * Display Suite example layout template.
 *
 * Available variables:
 *
 * Layout:
 * - $classes: String of classes that can be used to style this layout.
 * - $contextual_links: Renderable array of contextual links.
 *
 * Regions:
 *
 * - $left: Rendered content for the "Left" region.
 * - $left_classes: String of classes that can be used to style the "Left" region.
 *
 * - $right: Rendered content for the "Right" region.
 * - $right_classes: String of classes that can be used to style the "Right" region.
 */
?>
<div class="<?php print $classes;?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
    <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <!-- regions -->

  <?php if ($header): ?>
    <div class="groupheader<?php print $header_classes; ?>">
      <?php print $header; ?>
    </div>
  <?php endif; ?>

  <?php if ($left): ?>
    <div class="groupleft<?php print $left_classes; ?>">
      <?php print $left; ?>
    </div>
  <?php endif; ?>

  <?php if ($middle): ?>
    <div class="groupmiddle<?php print $middle_classes; ?>">
      <?php print $middle; ?>
    </div>
  <?php endif; ?>

  <?php if ($right): ?>
    <div class="groupright<?php print $right_classes; ?>">
      <?php print $right; ?>
    </div>
  <?php endif; ?>
  
   <?php if ($leftmiddle): ?>
    <div class="groupleft<?php print $leftmiddle_classes; ?>">
      <?php print $leftmiddle; ?>
    </div>
  <?php endif; ?>

  <?php if ($middlemiddle): ?>
    <div class="groupmiddle<?php print $middlemiddle_classes; ?>">
      <?php print $middlemiddle; ?>
    </div>
  <?php endif; ?>

  <?php if ($rightmiddle): ?>
    <div class="groupright<?php print $rightmiddle_classes; ?>">
      <?php print $rightmiddle; ?>
    </div>
  <?php endif; ?>
  
   <?php if ($leftbottom): ?>
    <div class="groupleft<?php print $leftbottom_classes; ?>">
      <?php print $leftbottom; ?>
    </div>
  <?php endif; ?>

  <?php if ($middlebottom): ?>
    <div class="groupmiddle<?php print $middlebottom_classes; ?>">
      <?php print $middlebottom; ?>
    </div>
  <?php endif; ?>

  <?php if ($rightbottom): ?>
    <div class="groupright<?php print $rightbottom_classes; ?>">
      <?php print $rightbottom; ?>
    </div>
  <?php endif; ?>

  <?php if ($notes): ?>
    <div class="group-notes<?php print $notes_classes; ?>">
      <?php print $notes; ?>
    </div>
  <?php endif; ?>

  <?php if ($footer): ?>
    <div class="group-footer<?php print $footer_classes; ?>">
      <?php print $footer; ?>
    </div>
  <?php endif; ?>


  <!-- These comments are required for the Drush command. You can remove them in your own copy -->
  <!-- /regions -->

</div>
