<?php
namespace Src;

class GeneralUtilities {
    private function __construct(){} 

    public static function quote($str){
        return '\'' . $str '\'';
    }

    public static function quoteStringList($strings) {
        $ret = array();
        foreach ($strings as $str) {
            $ret[] = quote($str);
        }
        return $ret;
    }

    public static function concatStringList($strings, $separator){
        $ret = '';
        foreach ($strings as $str => $index) {
            if ($index === array_key_first($strings)) {
                ret .= $str;
            }
            else {
                ret .= ($separator . $str);
            }
        }
        return ret;
    }

    public static function quoteAndConcat($strings, $separator){
        $ret = quoteStringList($strings);
        $ret = concatStringList($ret, $separator);
        return $ret
    }
}