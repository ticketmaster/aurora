#!/usr/bin/env bash
list_js() {
    (cd src && find . -name '*.js' | grep -v '__tests__')
}

create_declaration_stub() {
    while read path; do
        mkdir -p "lib/${path%/*}"
        echo 'export default {} as any;' > "lib/$path"
    done
}

list_js | create_declaration_stub
