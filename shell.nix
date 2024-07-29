with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "new-site";
  buildInputs = [
    nodejs_22
    yarn-berry
  ];
}
