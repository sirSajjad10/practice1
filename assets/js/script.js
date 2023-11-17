$(document).ready(function () {
    let width = $("#sh-equal-box").width();
    let width_akoolad_right = $("#sh-akoolad-right").outerWidth(true);
    let width_akoolad_left = $("#sh-akoolad-left").outerWidth(true);
    let width_word1 = $("#sh-word1").outerWidth(true);
    let width_word2 = $("#sh-word2").outerWidth(true);
    let width_word3 = $("#sh-word3").outerWidth(true);
    let width_word4 = $("#sh-word4").outerWidth(true);
    let width_left_col =Math.max(width_word2,width_word4);
    let width_right_col =Math.max(width_word1,width_word3);
    let width_center=width - width_akoolad_right - width_akoolad_left - width_right_col - width_left_col;
    let width_equal = $(".sh-equal").outerWidth(true);
    let width_center_final=width_center - width_equal;

    $("#sh-line1").width(width_right_col - width_word1 + width_center_final / 3);
    $("#sh-line2").width(width_left_col - width_word2 + width_center_final / 3);
    $("#sh-line3").width(width_right_col - width_word3 + width_center_final / 3);
    $("#sh-line4").width(width_left_col - width_word4 + width_center_final / 3);
});