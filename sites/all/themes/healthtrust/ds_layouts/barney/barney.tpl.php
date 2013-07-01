<?php

/**
 * @file
 * Display Suite 3 column stacked template.
 */
?>
<div class="barney <?php print $classes;?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <?php if ($header): ?>
    <div class="barney-header<?php print $header_classes; ?>">
      <?php print $header; ?>
    </div>
  <?php endif; ?>
<hr>
  <?php if ($left1): ?>
    <div class="barney-left<?php print $left_classes; ?>">
      <?php print $left1; ?>
    </div>
  <?php endif; ?>
<hr>
    <?php if ($middle1): ?>
    <div class="barney-middle<?php print $middle_classes; ?>">
      <?php print $middle1; ?>
    </div>
  <?php endif; ?>
<hr>
  <?php if ($right1): ?>
    <div class="barney-right<?php print $right_classes; ?>">
      <?php print $right1; ?>
    </div>
  <?php endif; ?>
<hr>
  <?php if ($footer): ?>
    <div class="barney-footer<?php print $footer_classes; ?>">
      <?php print $footer; ?>
    </div>
  <?php endif; ?>
</div>
