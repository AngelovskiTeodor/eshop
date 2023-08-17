<?php
namespace Src\System;

class EnvironmentVariablesLoader {
    
    private static $instance = null;
    
    private $path;

    private function __construct(string $path){
        if (!file_exists($path)) {
            throw new \RuntimeException($path.' does not exists.');
        }
        $this->path = $path;
    }

    public static function load($path): void {
        $loader = self::getInstance($path);

        if (!is_readable($loader->path)) {
            throw new \RuntimeException($loader->path.' is not readable.');
        }

        $entries = file($loader->path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($entries as $entry) {
            if (strpos(trim($entry), '#') === 0) {
                continue;
            }

            list($variable, $value) = explode('=', $entry, 2);
            $variable = trim($variable);
            $value = trim($value);

            if (!array_key_exists($variable, $_SERVER) && !array_key_exists($variable, $_ENV)){
                putenv(sprintf('%s=%s', $variable, $value));
                $_ENV[$variable] = $value;
                $_SERVER[$variable] = $value;
            }
        }
    }

    private static function getInstance($path) {
        if (self::$instance == null) {
            self::$instance = new EnvironmentVariablesLoader($path);
        }
        return self::$instance;
    }

    private function __clone(){
        return self::$instance();
    }
}