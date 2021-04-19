const prettier = require("prettier");
const code = `
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
prettier.format(code, {
  parser: "kotlin",
  plugins: ["."]
});
