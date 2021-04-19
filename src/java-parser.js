const { parse } = require("java-parser");

const sentence = `
package global.genesis.gen.config.fields

import global.genesis.dictionary.Field
import global.genesis.dictionary.pal.NonNullable
import global.genesis.dictionary.pal.Nullable
import global.genesis.dictionary.pal.PALFieldType
import global.genesis.dictionary.pal.context
import kotlin.Boolean
import kotlin.Double
import kotlin.Int
import kotlin.Long
import kotlin.String
import kotlin.Suppress
import kotlin.Unit
import kotlin.reflect.full.declaredMemberProperties
import org.joda.time.DateTime

@Suppress("unused")
public object Fields {
  public val ACCESS_TYPE: NonNullable<String> by context {
        NonNullable<String>(Field(
            name = "ACCESS_TYPE", 
            type = Field.Type.ENUM, 
            nullable = false, 
            values = "ALL ENTITY MULTI_ENTITY",
            defaultValue = "ALL", 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val ACTIVE: Nullable<Boolean> by context {
        Nullable<Boolean>(Field(
            name = "ACTIVE", 
            type = Field.Type.BOOLEAN, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val ACTIVE_SESSIONS: NonNullable<Int> by context {
        NonNullable<Int>(Field(
            name = "ACTIVE_SESSIONS", 
            type = Field.Type.INT, 
            nullable = false, 
            values = null,
            defaultValue = 0, 
            maxSize = null, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val ADDRESS_LINE1: Nullable<String> by context {
        Nullable<String>(Field(
            name = "ADDRESS_LINE1", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val ADDRESS_LINE2: Nullable<String> by context {
        Nullable<String>(Field(
            name = "ADDRESS_LINE2", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val ADDRESS_LINE3: Nullable<String> by context {
        Nullable<String>(Field(
            name = "ADDRESS_LINE3", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val ADDRESS_LINE4: Nullable<String> by context {
        Nullable<String>(Field(
            name = "ADDRESS_LINE4", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val ALERT_ID: Nullable<String> by context {
        Nullable<String>(Field(
            name = "ALERT_ID", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val APPLICATION_REF: Nullable<String> by context {
        Nullable<String>(Field(
            name = "APPLICATION_REF", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val APPROVAL_ID: Nullable<String> by context {
        Nullable<String>(Field(
            name = "APPROVAL_ID", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val APPROVAL_KEY: Nullable<String> by context {
        Nullable<String>(Field(
            name = "APPROVAL_KEY", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val APPROVAL_MESSAGE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "APPROVAL_MESSAGE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val APPROVAL_STATUS: NonNullable<String> by context {
        NonNullable<String>(Field(
            name = "APPROVAL_STATUS", 
            type = Field.Type.ENUM, 
            nullable = false, 
            values = "PENDING APPROVED CANCELLED REJECTED_BY_USER REJECTED_BY_SERVICE",
            defaultValue = "PENDING", 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val APPROVED_COUNTER: Nullable<Int> by context {
        Nullable<Int>(Field(
            name = "APPROVED_COUNTER", 
            type = Field.Type.INT, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val ATTRIBUTES: Nullable<String> by context {
        Nullable<String>(Field(
            name = "ATTRIBUTES", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val AUDIT_CODE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "AUDIT_CODE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val AUDIT_TEXT: Nullable<String> by context {
        Nullable<String>(Field(
            name = "AUDIT_TEXT", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val AUTH_ACTION: Nullable<String> by context {
        Nullable<String>(Field(
            name = "AUTH_ACTION", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val AWAITING_COUNTER: Nullable<Int> by context {
        Nullable<Int>(Field(
            name = "AWAITING_COUNTER", 
            type = Field.Type.INT, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val BODY: Nullable<String> by context {
        Nullable<String>(Field(
            name = "BODY", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val CANCELLED_COUNTER: Nullable<Int> by context {
        Nullable<Int>(Field(
            name = "CANCELLED_COUNTER", 
            type = Field.Type.INT, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val CITY: Nullable<String> by context {
        Nullable<String>(Field(
            name = "CITY", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val CLIENT_ORDER_ID: Nullable<String> by context {
        Nullable<String>(Field(
            name = "CLIENT_ORDER_ID", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val CODE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "CODE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val COMPANY_ID: Nullable<String> by context {
        Nullable<String>(Field(
            name = "COMPANY_ID", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val COMPANY_NAME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "COMPANY_NAME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val COUNTRY: Nullable<String> by context {
        Nullable<String>(Field(
            name = "COUNTRY", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val CREATED_AT: Nullable<DateTime> by context {
        Nullable<DateTime>(Field(
            name = "CREATED_AT", 
            type = Field.Type.DATETIME, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val CREATED_BY: Nullable<String> by context {
        Nullable<String>(Field(
            name = "CREATED_BY", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val CRON_EXPRESSION: Nullable<String> by context {
        Nullable<String>(Field(
            name = "CRON_EXPRESSION", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val DATADUMP: Nullable<Boolean> by context {
        Nullable<Boolean>(Field(
            name = "DATADUMP", 
            type = Field.Type.BOOLEAN, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val DESCRIPTION: Nullable<String> by context {
        Nullable<String>(Field(
            name = "DESCRIPTION", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 255, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val DESTINATION: Nullable<String> by context {
        Nullable<String>(Field(
            name = "DESTINATION", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val DOCUMENT_ID: Nullable<String> by context {
        Nullable<String>(Field(
            name = "DOCUMENT_ID", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val DOMAIN: Nullable<String> by context {
        Nullable<String>(Field(
            name = "DOMAIN", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val EMAIL_ADDRESS: Nullable<String> by context {
        Nullable<String>(Field(
            name = "EMAIL_ADDRESS", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val ENTITY_ID: Nullable<String> by context {
        Nullable<String>(Field(
            name = "ENTITY_ID", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val ENTITY_ID_TYPE: NonNullable<String> by context {
        NonNullable<String>(Field(
            name = "ENTITY_ID_TYPE", 
            type = Field.Type.ENUM, 
            nullable = false, 
            values = "USER_NAME PROFILE_NAME GATEWAY",
            defaultValue = "USER_NAME", 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val ENTITY_TABLE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "ENTITY_TABLE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val EVENT_DATETIME: Nullable<DateTime> by context {
        Nullable<DateTime>(Field(
            name = "EVENT_DATETIME", 
            type = Field.Type.DATETIME, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val EVENT_DETAILS: Nullable<String> by context {
        Nullable<String>(Field(
            name = "EVENT_DETAILS", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val EVENT_MESSAGE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "EVENT_MESSAGE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val EVENT_TYPE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "EVENT_TYPE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val EXPIRY: Nullable<DateTime> by context {
        Nullable<DateTime>(Field(
            name = "EXPIRY", 
            type = Field.Type.DATETIME, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val EXTERNAL_ID: Nullable<String> by context {
        Nullable<String>(Field(
            name = "EXTERNAL_ID", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val FAILED_LOGIN_ATTEMPTS: NonNullable<Int> by context {
        NonNullable<Int>(Field(
            name = "FAILED_LOGIN_ATTEMPTS", 
            type = Field.Type.INT, 
            nullable = false, 
            values = null,
            defaultValue = 0, 
            maxSize = null, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val FIELD_NAME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "FIELD_NAME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val FIELD_VALUE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "FIELD_VALUE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val FIRST_NAME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "FIRST_NAME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val FREE_PHYSICAL_MEMORY_SIZE: Nullable<Long> by context {
        Nullable<Long>(Field(
            name = "FREE_PHYSICAL_MEMORY_SIZE", 
            type = Field.Type.LONG, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val GATEWAY_ID: Nullable<String> by context {
        Nullable<String>(Field(
            name = "GATEWAY_ID", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val GATEWAY_TYPE: NonNullable<String> by context {
        NonNullable<String>(Field(
            name = "GATEWAY_TYPE", 
            type = Field.Type.ENUM, 
            nullable = false, 
            values =
            "Log EmailUser EmailDistribution SymphonyByUserEmail SymphonyRoom MsTeamsChannel SymphonyRoomReqRep",
            defaultValue = "Log", 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val GATEWAY_VALUE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "GATEWAY_VALUE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val HASHED_USER_NAME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "HASHED_USER_NAME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = "******"
        ))}


  public val HEADER: Nullable<String> by context {
        Nullable<String>(Field(
            name = "HEADER", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val HOST: Nullable<String> by context {
        Nullable<String>(Field(
            name = "HOST", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val HOST_NAME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "HOST_NAME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val ID: NonNullable<String> by context {
        NonNullable<String>(Field(
            name = "ID", 
            type = Field.Type.STRING, 
            nullable = false, 
            values = null,
            defaultValue = null, 
            maxSize = 20, 
            fileName = "dta-system",
            format = null,
            sensitiveMask = null
        ))}


  public val INCOMING_TOPIC: Nullable<String> by context {
        Nullable<String>(Field(
            name = "INCOMING_TOPIC", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val IP_ADDRESS: Nullable<String> by context {
        Nullable<String>(Field(
            name = "IP_ADDRESS", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val KEY_ALGORITHM: NonNullable<String> by context {
        NonNullable<String>(Field(
            name = "KEY_ALGORITHM", 
            type = Field.Type.ENUM, 
            nullable = false, 
            values = "HMAC RSA",
            defaultValue = "RSA", 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val LAST_ACCESS_TIME: Nullable<DateTime> by context {
        Nullable<DateTime>(Field(
            name = "LAST_ACCESS_TIME", 
            type = Field.Type.DATETIME, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val LAST_LOGIN: Nullable<DateTime> by context {
        Nullable<DateTime>(Field(
            name = "LAST_LOGIN", 
            type = Field.Type.DATE, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val LAST_LOGIN_DATETIME: Nullable<DateTime> by context {
        Nullable<DateTime>(Field(
            name = "LAST_LOGIN_DATETIME", 
            type = Field.Type.DATETIME, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val LAST_NAME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "LAST_NAME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val LOG_LEVEL: Nullable<String> by context {
        Nullable<String>(Field(
            name = "LOG_LEVEL", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val MESSAGE_TYPE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "MESSAGE_TYPE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val MOBILE_NUMBER: Nullable<String> by context {
        Nullable<String>(Field(
            name = "MOBILE_NUMBER", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val MONITOR_MESSAGE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "MONITOR_MESSAGE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val MONITOR_NAME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "MONITOR_NAME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val MONITOR_STATE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "MONITOR_STATE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val NAME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "NAME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val NODE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "NODE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val NOTIFICATION_CODE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "NOTIFICATION_CODE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val NOTIFICATION_ID: Nullable<String> by context {
        Nullable<String>(Field(
            name = "NOTIFICATION_ID", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val NOTIFICATION_TIMESTAMP: Nullable<DateTime> by context {
        Nullable<DateTime>(Field(
            name = "NOTIFICATION_TIMESTAMP", 
            type = Field.Type.DATETIME, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val NOTIFY_COMPRESSION_TYPE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "NOTIFY_COMPRESSION_TYPE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val NOTIFY_ID: Nullable<String> by context {
        Nullable<String>(Field(
            name = "NOTIFY_ID", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val NOTIFY_ROUTE_ID: Nullable<String> by context {
        Nullable<String>(Field(
            name = "NOTIFY_ROUTE_ID", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val NOTIFY_SEVERITY: NonNullable<String> by context {
        NonNullable<String>(Field(
            name = "NOTIFY_SEVERITY", 
            type = Field.Type.ENUM, 
            nullable = false, 
            values = "Information Warning Serious Critical",
            defaultValue = "Information", 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val ONLINE: NonNullable<Boolean> by context {
        NonNullable<Boolean>(Field(
            name = "ONLINE", 
            type = Field.Type.BOOLEAN, 
            nullable = false, 
            values = null,
            defaultValue = false, 
            maxSize = null, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val PASSWORD: Nullable<String> by context {
        Nullable<String>(Field(
            name = "PASSWORD", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 255, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = "******"
        ))}


  public val PASSWORD_EXPIRY_DATETIME: Nullable<DateTime> by context {
        Nullable<DateTime>(Field(
            name = "PASSWORD_EXPIRY_DATETIME", 
            type = Field.Type.DATETIME, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val POSTAL_CODE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "POSTAL_CODE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val PROCESS: Nullable<String> by context {
        Nullable<String>(Field(
            name = "PROCESS", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val PROCESS_CPU_USAGE: Nullable<Double> by context {
        Nullable<Double>(Field(
            name = "PROCESS_CPU_USAGE", 
            type = Field.Type.DOUBLE, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val PROCESS_HOSTNAME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "PROCESS_HOSTNAME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val PROCESS_MEM_USAGE: Nullable<Double> by context {
        Nullable<Double>(Field(
            name = "PROCESS_MEM_USAGE", 
            type = Field.Type.DOUBLE, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val PROCESS_NAME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "PROCESS_NAME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val PROCESS_PORT: Nullable<Int> by context {
        Nullable<Int>(Field(
            name = "PROCESS_PORT", 
            type = Field.Type.INT, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val PROCESS_RESOURCES: Nullable<String> by context {
        Nullable<String>(Field(
            name = "PROCESS_RESOURCES", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 5000, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val PROCESS_SECURE: Nullable<Boolean> by context {
        Nullable<Boolean>(Field(
            name = "PROCESS_SECURE", 
            type = Field.Type.BOOLEAN, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val PROCESS_STATE_TEXT: NonNullable<String> by context {
        NonNullable<String>(Field(
            name = "PROCESS_STATE_TEXT", 
            type = Field.Type.ENUM, 
            nullable = false, 
            values = "DOWN ERROR WARNING STANDBY STARTING UP",
            defaultValue = "STARTING", 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val PROCESS_STATUS: Nullable<Boolean> by context {
        Nullable<Boolean>(Field(
            name = "PROCESS_STATUS", 
            type = Field.Type.BOOLEAN, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val PROCESS_STATUS_MESSAGE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "PROCESS_STATUS_MESSAGE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val PROFILE_NAME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "PROFILE_NAME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val PUBLIC_KEY: Nullable<String> by context {
        Nullable<String>(Field(
            name = "PUBLIC_KEY", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = "******"
        ))}


  public val QUERY_NAME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "QUERY_NAME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val REASON: Nullable<String> by context {
        Nullable<String>(Field(
            name = "REASON", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val RECORD_ID: NonNullable<Long> by context {
        NonNullable<Long>(Field(
            name = "RECORD_ID", 
            type = Field.Type.LONG, 
            nullable = false, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "dta-system",
            format = "0",
            sensitiveMask = null
        ))}


  public val REDIRECT_URL: Nullable<String> by context {
        Nullable<String>(Field(
            name = "REDIRECT_URL", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val REF: Nullable<String> by context {
        Nullable<String>(Field(
            name = "REF", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val REFRESH_TOKEN: Nullable<String> by context {
        Nullable<String>(Field(
            name = "REFRESH_TOKEN", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val REGION: Nullable<String> by context {
        Nullable<String>(Field(
            name = "REGION", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val REJECTED_BY_SERVER_COUNTER: Nullable<Int> by context {
        Nullable<Int>(Field(
            name = "REJECTED_BY_SERVER_COUNTER", 
            type = Field.Type.INT, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val REJECTED_BY_USER_COUNTER: Nullable<Int> by context {
        Nullable<Int>(Field(
            name = "REJECTED_BY_USER_COUNTER", 
            type = Field.Type.INT, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val REJECTED_LOGIN_ATTEMPTS: NonNullable<Int> by context {
        NonNullable<Int>(Field(
            name = "REJECTED_LOGIN_ATTEMPTS", 
            type = Field.Type.INT, 
            nullable = false, 
            values = null,
            defaultValue = 0, 
            maxSize = null, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val REJECT_REASON: Nullable<String> by context {
        Nullable<String>(Field(
            name = "REJECT_REASON", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val RESOURCE_TYPES: Nullable<String> by context {
        Nullable<String>(Field(
            name = "RESOURCE_TYPES", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val RESULT_EXPRESSION: Nullable<String> by context {
        Nullable<String>(Field(
            name = "RESULT_EXPRESSION", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val RIGHT_CODE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "RIGHT_CODE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val RULE_END_TIME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "RULE_END_TIME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val RULE_EXPRESSION: Nullable<String> by context {
        Nullable<String>(Field(
            name = "RULE_EXPRESSION", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val RULE_START_TIME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "RULE_START_TIME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val RULE_STATUS: NonNullable<String> by context {
        NonNullable<String>(Field(
            name = "RULE_STATUS", 
            type = Field.Type.ENUM, 
            nullable = false, 
            values = "ENABLED DISABLED",
            defaultValue = "DISABLED", 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val RULE_TABLE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "RULE_TABLE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val RX_SEQUENCE: Nullable<Long> by context {
        Nullable<Long>(Field(
            name = "RX_SEQUENCE", 
            type = Field.Type.LONG, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val SECRET: Nullable<String> by context {
        Nullable<String>(Field(
            name = "SECRET", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = "******"
        ))}


  public val SENDER: Nullable<String> by context {
        Nullable<String>(Field(
            name = "SENDER", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val SESSION_AUTH_TOKEN: Nullable<String> by context {
        Nullable<String>(Field(
            name = "SESSION_AUTH_TOKEN", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val SESSION_ID: Nullable<String> by context {
        Nullable<String>(Field(
            name = "SESSION_ID", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val SOURCE_ID: Nullable<String> by context {
        Nullable<String>(Field(
            name = "SOURCE_ID", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val START_TIME: Nullable<DateTime> by context {
        Nullable<DateTime>(Field(
            name = "START_TIME", 
            type = Field.Type.DATETIME, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val START_TIMESTAMP: Nullable<DateTime> by context {
        Nullable<DateTime>(Field(
            name = "START_TIMESTAMP", 
            type = Field.Type.DATETIME, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val STATUS: Nullable<String> by context {
        Nullable<String>(Field(
            name = "STATUS", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val SYSTEM_CPU_LOAD: Nullable<Double> by context {
        Nullable<Double>(Field(
            name = "SYSTEM_CPU_LOAD", 
            type = Field.Type.DOUBLE, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val SYSTEM_KEY: Nullable<String> by context {
        Nullable<String>(Field(
            name = "SYSTEM_KEY", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val SYSTEM_VALUE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "SYSTEM_VALUE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = "******"
        ))}


  public val TABLE_OPERATION: NonNullable<String> by context {
        NonNullable<String>(Field(
            name = "TABLE_OPERATION", 
            type = Field.Type.STRING, 
            nullable = false, 
            values = null,
            defaultValue = "INSERT", 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val TAG_VALUE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "TAG_VALUE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val TELEPHONE_NUMBER_DIRECT: Nullable<String> by context {
        Nullable<String>(Field(
            name = "TELEPHONE_NUMBER_DIRECT", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val TELEPHONE_NUMBER_OFFICE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "TELEPHONE_NUMBER_OFFICE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val TEXT: Nullable<String> by context {
        Nullable<String>(Field(
            name = "TEXT", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val TIMEOUT: Nullable<Long> by context {
        Nullable<Long>(Field(
            name = "TIMEOUT", 
            type = Field.Type.LONG, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val TIMESTAMP: NonNullable<Long> by context {
        NonNullable<Long>(Field(
            name = "TIMESTAMP", 
            type = Field.Type.NANO_TIMESTAMP, 
            nullable = false, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "dta-system",
            format = null,
            sensitiveMask = null
        ))}


  public val TIME_ZONE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "TIME_ZONE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val TITLE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "TITLE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val TOPIC: Nullable<String> by context {
        Nullable<String>(Field(
            name = "TOPIC", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val TOPIC_MATCH: Nullable<String> by context {
        Nullable<String>(Field(
            name = "TOPIC_MATCH", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val TOTAL_PHYSICAL_MEMORY_SIZE: Nullable<Long> by context {
        Nullable<Long>(Field(
            name = "TOTAL_PHYSICAL_MEMORY_SIZE", 
            type = Field.Type.LONG, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val USER_LOGIN_AUDIT_ID: Nullable<String> by context {
        Nullable<String>(Field(
            name = "USER_LOGIN_AUDIT_ID", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val USER_NAME: Nullable<String> by context {
        Nullable<String>(Field(
            name = "USER_NAME", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val USER_TYPE: NonNullable<String> by context {
        NonNullable<String>(Field(
            name = "USER_TYPE", 
            type = Field.Type.ENUM, 
            nullable = false, 
            values = "USER ADVISOR CLIENT",
            defaultValue = "USER", 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val VERSION: Nullable<Int> by context {
        Nullable<Int>(Field(
            name = "VERSION", 
            type = Field.Type.INT, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = null, 
            fileName = "genesis/cfg/genesis-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public val WEBSITE: Nullable<String> by context {
        Nullable<String>(Field(
            name = "WEBSITE", 
            type = Field.Type.STRING, 
            nullable = true, 
            values = null,
            defaultValue = null, 
            maxSize = 64, 
            fileName =
            "E:\\\\dev\\\\Genesis\\\\genesisRepos\\\\auth-server\\\\auth-config\\\\src\\\\main\\\\resources\\\\cfg\\\\auth-fields-dictionary.kts",
            format = null,
            sensitiveMask = null
        ))}


  public operator fun get (fieldName: String): Unit {
    val property = this::class.declaredMemberProperties.find { it.name == fieldName }
    if (property == null) {
        throw Exception("Failed to find field with name " + fieldName)
    } else {
        property.getter.call(this::class.objectInstance)
    } 
  }
}

`;
const cst = parse(sentence);
console.log(cst);
