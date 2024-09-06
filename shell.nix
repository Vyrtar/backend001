{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_18
  ];

  shellHook = ''
    echo "Entering Node.js 18 environment for Backend A"
  '';
}
