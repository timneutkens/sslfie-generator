# SSLfie certificate generator
> Do note this is build for macOS usage and will not function on another OS

Depends on global [sslfie](https://github.com/mkropat/sslfie) command and node.js `>= 4`

## Installation

Install sslfie:
```bash
curl -O https://raw.githubusercontent.com/mkropat/sslfie/master/sslfie
chmod +x sslfie
mv sslfie /usr/local/bin/sslfie
```

Install `sslfie-generator` command:

`npm install -g sslfie-generator`


## Usage

`sslfie-generator [options] <domainname> [country]`

Domainname is required and should be without `www.` www will be automagically added to the generated certificate.

Country is not required and will fall back to US if not provided.

Available options are:
```
-h, --help     output usage information
-V, --version  output the version number
-o, --output <output>  Output directory
```
