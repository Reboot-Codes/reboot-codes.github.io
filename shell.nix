{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    buildInputs = with pkgs.buildPackages; [ nodejs_20 yarn ];
}