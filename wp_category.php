<?php

define('WP_USE_THEMES', false); 
require('./blog/wp-load.php');

$args = array(
    'orderby' => 'name',
    'hide_empty' => false,
    'order' => 'ASC',
    'parent' => 0 
);

$categories = get_categories( $args );
$myCategories = array();

foreach($categories as $category) {
    $args['parent'] = $category->term_id;
    $sub_categories = get_categories( $args );
    $child = array();

    foreach( $sub_categories as $sub_category) {
        array_push($child, array('name' => $sub_category->name));
    }

    $group = array('name' => $category->name, 'child' => $child);
    array_push($myCategories, $group);
}

$myJSON = json_encode($myCategories);
echo $myJSON;

?>


