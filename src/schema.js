const agl_module = require("net.akehurst.language-agl-processor");
const Agl = agl_module.net.akehurst.language.agl.processor.Agl;

const grammarStr = `
namespace test
grammar Kotlin {
    skip WHITE_SPACE = "\\s+" ;
    skip MULTI_LINE_COMMENT = "/\\*[^*]*\\*+(?:[^*/][^*]*\\*+)*/" ;
    skip SINGLE_LINE_COMMENT = "//.*?$" ;
    unit = definition* ;
    definition = classDefinition ;
    classDefinition =
        'class' NAME '{'
            propertyDefinition*
            methodDefinition*
        '}'
    ;
    propertyDefinition = NAME ':' NAME ;
    methodDefinition = NAME '(' parameterList ')' body ;
    parameterList = [ parameterDefinition / ',']* ;
    parameterDefinition = NAME ':' NAME ;
    body = '{' '}' ;
    NAME = "[a-zA-Z_][a-zA-Z0-9_]*" ;
    BOOLEAN = "true | false" ;
    NUMBER = "[0-9]+([.][0-9]+)?" ;
    STRING = "'(?:\\\\?.)*?'" ;
}
`;
const proc = Agl.processorFromString(grammarStr);

const sentence = `
tables {

    table(name = "MANAGER", id = 8008, audit = details(id=8009, sequence="MN")) {
        sequence(Fields.MANAGER_ID, "MA")
        Fields.MANAGER_NAME
        Fields.CLO_DEALS
        Fields.CLO_ASSET_UNDER_MANAGEMENT
        Fields.ENTERED_BY
        Fields.ENTRY_DATETIME
        Fields.LAST_UPDATED_BY
        Fields.LAST_UPDATED_DATETIME
        primaryKey {
            Fields.MANAGER_ID
        }
        indices {
            unique {
                Fields.MANAGER_NAME
            }
        }
    }
}
`;
const sppt = proc.parse(sentence);
console.info(sppt);

const asm = proc.process(sentence).toArray();
console.info(asm);
