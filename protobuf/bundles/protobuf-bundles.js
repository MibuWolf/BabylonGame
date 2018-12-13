var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.client_to_svr = (function() {

    /**
     * Namespace client_to_svr.
     * @exports client_to_svr
     * @namespace
     */
    var client_to_svr = {};

    client_to_svr.get_verification_code = (function() {

        /**
         * Properties of a get_verification_code.
         * @memberof client_to_svr
         * @interface Iget_verification_code
         * @property {string} phone_num get_verification_code phone_num
         */

        /**
         * Constructs a new get_verification_code.
         * @memberof client_to_svr
         * @classdesc Represents a get_verification_code.
         * @implements Iget_verification_code
         * @constructor
         * @param {client_to_svr.Iget_verification_code=} [properties] Properties to set
         */
        function get_verification_code(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * get_verification_code phone_num.
         * @member {string} phone_num
         * @memberof client_to_svr.get_verification_code
         * @instance
         */
        get_verification_code.prototype.phone_num = "";

        /**
         * Creates a new get_verification_code instance using the specified properties.
         * @function create
         * @memberof client_to_svr.get_verification_code
         * @static
         * @param {client_to_svr.Iget_verification_code=} [properties] Properties to set
         * @returns {client_to_svr.get_verification_code} get_verification_code instance
         */
        get_verification_code.create = function create(properties) {
            return new get_verification_code(properties);
        };

        /**
         * Encodes the specified get_verification_code message. Does not implicitly {@link client_to_svr.get_verification_code.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.get_verification_code
         * @static
         * @param {client_to_svr.Iget_verification_code} message get_verification_code message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_verification_code.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.phone_num);
            return writer;
        };

        /**
         * Encodes the specified get_verification_code message, length delimited. Does not implicitly {@link client_to_svr.get_verification_code.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.get_verification_code
         * @static
         * @param {client_to_svr.Iget_verification_code} message get_verification_code message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_verification_code.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a get_verification_code message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.get_verification_code
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.get_verification_code} get_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_verification_code.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.get_verification_code();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.phone_num = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("phone_num"))
                throw $util.ProtocolError("missing required 'phone_num'", { instance: message });
            return message;
        };

        /**
         * Decodes a get_verification_code message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.get_verification_code
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.get_verification_code} get_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_verification_code.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a get_verification_code message.
         * @function verify
         * @memberof client_to_svr.get_verification_code
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        get_verification_code.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.phone_num))
                return "phone_num: string expected";
            return null;
        };

        return get_verification_code;
    })();

    client_to_svr.register_info = (function() {

        /**
         * Properties of a register_info.
         * @memberof client_to_svr
         * @interface Iregister_info
         * @property {string} email register_info email
         * @property {string} name register_info name
         * @property {string} passwnd register_info passwnd
         * @property {string} phone_num register_info phone_num
         * @property {string} verification_code register_info verification_code
         */

        /**
         * Constructs a new register_info.
         * @memberof client_to_svr
         * @classdesc Represents a register_info.
         * @implements Iregister_info
         * @constructor
         * @param {client_to_svr.Iregister_info=} [properties] Properties to set
         */
        function register_info(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * register_info email.
         * @member {string} email
         * @memberof client_to_svr.register_info
         * @instance
         */
        register_info.prototype.email = "";

        /**
         * register_info name.
         * @member {string} name
         * @memberof client_to_svr.register_info
         * @instance
         */
        register_info.prototype.name = "";

        /**
         * register_info passwnd.
         * @member {string} passwnd
         * @memberof client_to_svr.register_info
         * @instance
         */
        register_info.prototype.passwnd = "";

        /**
         * register_info phone_num.
         * @member {string} phone_num
         * @memberof client_to_svr.register_info
         * @instance
         */
        register_info.prototype.phone_num = "";

        /**
         * register_info verification_code.
         * @member {string} verification_code
         * @memberof client_to_svr.register_info
         * @instance
         */
        register_info.prototype.verification_code = "";

        /**
         * Creates a new register_info instance using the specified properties.
         * @function create
         * @memberof client_to_svr.register_info
         * @static
         * @param {client_to_svr.Iregister_info=} [properties] Properties to set
         * @returns {client_to_svr.register_info} register_info instance
         */
        register_info.create = function create(properties) {
            return new register_info(properties);
        };

        /**
         * Encodes the specified register_info message. Does not implicitly {@link client_to_svr.register_info.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.register_info
         * @static
         * @param {client_to_svr.Iregister_info} message register_info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        register_info.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.passwnd);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.phone_num);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.verification_code);
            return writer;
        };

        /**
         * Encodes the specified register_info message, length delimited. Does not implicitly {@link client_to_svr.register_info.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.register_info
         * @static
         * @param {client_to_svr.Iregister_info} message register_info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        register_info.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a register_info message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.register_info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.register_info} register_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        register_info.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.register_info();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.email = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.passwnd = reader.string();
                    break;
                case 4:
                    message.phone_num = reader.string();
                    break;
                case 5:
                    message.verification_code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("email"))
                throw $util.ProtocolError("missing required 'email'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("passwnd"))
                throw $util.ProtocolError("missing required 'passwnd'", { instance: message });
            if (!message.hasOwnProperty("phone_num"))
                throw $util.ProtocolError("missing required 'phone_num'", { instance: message });
            if (!message.hasOwnProperty("verification_code"))
                throw $util.ProtocolError("missing required 'verification_code'", { instance: message });
            return message;
        };

        /**
         * Decodes a register_info message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.register_info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.register_info} register_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        register_info.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a register_info message.
         * @function verify
         * @memberof client_to_svr.register_info
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        register_info.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.email))
                return "email: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.passwnd))
                return "passwnd: string expected";
            if (!$util.isString(message.phone_num))
                return "phone_num: string expected";
            if (!$util.isString(message.verification_code))
                return "verification_code: string expected";
            return null;
        };

        return register_info;
    })();

    client_to_svr.user_login_info = (function() {

        /**
         * Properties of a user_login_info.
         * @memberof client_to_svr
         * @interface Iuser_login_info
         * @property {string} name user_login_info name
         * @property {string} passwnd user_login_info passwnd
         */

        /**
         * Constructs a new user_login_info.
         * @memberof client_to_svr
         * @classdesc Represents a user_login_info.
         * @implements Iuser_login_info
         * @constructor
         * @param {client_to_svr.Iuser_login_info=} [properties] Properties to set
         */
        function user_login_info(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * user_login_info name.
         * @member {string} name
         * @memberof client_to_svr.user_login_info
         * @instance
         */
        user_login_info.prototype.name = "";

        /**
         * user_login_info passwnd.
         * @member {string} passwnd
         * @memberof client_to_svr.user_login_info
         * @instance
         */
        user_login_info.prototype.passwnd = "";

        /**
         * Creates a new user_login_info instance using the specified properties.
         * @function create
         * @memberof client_to_svr.user_login_info
         * @static
         * @param {client_to_svr.Iuser_login_info=} [properties] Properties to set
         * @returns {client_to_svr.user_login_info} user_login_info instance
         */
        user_login_info.create = function create(properties) {
            return new user_login_info(properties);
        };

        /**
         * Encodes the specified user_login_info message. Does not implicitly {@link client_to_svr.user_login_info.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.user_login_info
         * @static
         * @param {client_to_svr.Iuser_login_info} message user_login_info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_login_info.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.passwnd);
            return writer;
        };

        /**
         * Encodes the specified user_login_info message, length delimited. Does not implicitly {@link client_to_svr.user_login_info.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.user_login_info
         * @static
         * @param {client_to_svr.Iuser_login_info} message user_login_info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_login_info.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a user_login_info message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.user_login_info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.user_login_info} user_login_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_login_info.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.user_login_info();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.passwnd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("passwnd"))
                throw $util.ProtocolError("missing required 'passwnd'", { instance: message });
            return message;
        };

        /**
         * Decodes a user_login_info message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.user_login_info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.user_login_info} user_login_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_login_info.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a user_login_info message.
         * @function verify
         * @memberof client_to_svr.user_login_info
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        user_login_info.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.passwnd))
                return "passwnd: string expected";
            return null;
        };

        return user_login_info;
    })();

    client_to_svr.client_change_pwd = (function() {

        /**
         * Properties of a client_change_pwd.
         * @memberof client_to_svr
         * @interface Iclient_change_pwd
         * @property {string} old_pwd client_change_pwd old_pwd
         * @property {string} new_pwd client_change_pwd new_pwd
         */

        /**
         * Constructs a new client_change_pwd.
         * @memberof client_to_svr
         * @classdesc Represents a client_change_pwd.
         * @implements Iclient_change_pwd
         * @constructor
         * @param {client_to_svr.Iclient_change_pwd=} [properties] Properties to set
         */
        function client_change_pwd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * client_change_pwd old_pwd.
         * @member {string} old_pwd
         * @memberof client_to_svr.client_change_pwd
         * @instance
         */
        client_change_pwd.prototype.old_pwd = "";

        /**
         * client_change_pwd new_pwd.
         * @member {string} new_pwd
         * @memberof client_to_svr.client_change_pwd
         * @instance
         */
        client_change_pwd.prototype.new_pwd = "";

        /**
         * Creates a new client_change_pwd instance using the specified properties.
         * @function create
         * @memberof client_to_svr.client_change_pwd
         * @static
         * @param {client_to_svr.Iclient_change_pwd=} [properties] Properties to set
         * @returns {client_to_svr.client_change_pwd} client_change_pwd instance
         */
        client_change_pwd.create = function create(properties) {
            return new client_change_pwd(properties);
        };

        /**
         * Encodes the specified client_change_pwd message. Does not implicitly {@link client_to_svr.client_change_pwd.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.client_change_pwd
         * @static
         * @param {client_to_svr.Iclient_change_pwd} message client_change_pwd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        client_change_pwd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.old_pwd);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.new_pwd);
            return writer;
        };

        /**
         * Encodes the specified client_change_pwd message, length delimited. Does not implicitly {@link client_to_svr.client_change_pwd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.client_change_pwd
         * @static
         * @param {client_to_svr.Iclient_change_pwd} message client_change_pwd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        client_change_pwd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a client_change_pwd message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.client_change_pwd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.client_change_pwd} client_change_pwd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        client_change_pwd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.client_change_pwd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.old_pwd = reader.string();
                    break;
                case 2:
                    message.new_pwd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("old_pwd"))
                throw $util.ProtocolError("missing required 'old_pwd'", { instance: message });
            if (!message.hasOwnProperty("new_pwd"))
                throw $util.ProtocolError("missing required 'new_pwd'", { instance: message });
            return message;
        };

        /**
         * Decodes a client_change_pwd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.client_change_pwd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.client_change_pwd} client_change_pwd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        client_change_pwd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a client_change_pwd message.
         * @function verify
         * @memberof client_to_svr.client_change_pwd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        client_change_pwd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.old_pwd))
                return "old_pwd: string expected";
            if (!$util.isString(message.new_pwd))
                return "new_pwd: string expected";
            return null;
        };

        return client_change_pwd;
    })();

    client_to_svr.create_project = (function() {

        /**
         * Properties of a create_project.
         * @memberof client_to_svr
         * @interface Icreate_project
         * @property {string} parent create_project parent
         * @property {string} project create_project project
         */

        /**
         * Constructs a new create_project.
         * @memberof client_to_svr
         * @classdesc Represents a create_project.
         * @implements Icreate_project
         * @constructor
         * @param {client_to_svr.Icreate_project=} [properties] Properties to set
         */
        function create_project(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * create_project parent.
         * @member {string} parent
         * @memberof client_to_svr.create_project
         * @instance
         */
        create_project.prototype.parent = "";

        /**
         * create_project project.
         * @member {string} project
         * @memberof client_to_svr.create_project
         * @instance
         */
        create_project.prototype.project = "";

        /**
         * Creates a new create_project instance using the specified properties.
         * @function create
         * @memberof client_to_svr.create_project
         * @static
         * @param {client_to_svr.Icreate_project=} [properties] Properties to set
         * @returns {client_to_svr.create_project} create_project instance
         */
        create_project.create = function create(properties) {
            return new create_project(properties);
        };

        /**
         * Encodes the specified create_project message. Does not implicitly {@link client_to_svr.create_project.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.create_project
         * @static
         * @param {client_to_svr.Icreate_project} message create_project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        create_project.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.project);
            return writer;
        };

        /**
         * Encodes the specified create_project message, length delimited. Does not implicitly {@link client_to_svr.create_project.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.create_project
         * @static
         * @param {client_to_svr.Icreate_project} message create_project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        create_project.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a create_project message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.create_project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.create_project} create_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        create_project.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.create_project();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.parent = reader.string();
                    break;
                case 2:
                    message.project = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("parent"))
                throw $util.ProtocolError("missing required 'parent'", { instance: message });
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            return message;
        };

        /**
         * Decodes a create_project message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.create_project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.create_project} create_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        create_project.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a create_project message.
         * @function verify
         * @memberof client_to_svr.create_project
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        create_project.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.parent))
                return "parent: string expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            return null;
        };

        return create_project;
    })();

    client_to_svr.add_group_into_project = (function() {

        /**
         * Properties of an add_group_into_project.
         * @memberof client_to_svr
         * @interface Iadd_group_into_project
         * @property {string} parent add_group_into_project parent
         * @property {string} project add_group_into_project project
         * @property {string} group add_group_into_project group
         */

        /**
         * Constructs a new add_group_into_project.
         * @memberof client_to_svr
         * @classdesc Represents an add_group_into_project.
         * @implements Iadd_group_into_project
         * @constructor
         * @param {client_to_svr.Iadd_group_into_project=} [properties] Properties to set
         */
        function add_group_into_project(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * add_group_into_project parent.
         * @member {string} parent
         * @memberof client_to_svr.add_group_into_project
         * @instance
         */
        add_group_into_project.prototype.parent = "";

        /**
         * add_group_into_project project.
         * @member {string} project
         * @memberof client_to_svr.add_group_into_project
         * @instance
         */
        add_group_into_project.prototype.project = "";

        /**
         * add_group_into_project group.
         * @member {string} group
         * @memberof client_to_svr.add_group_into_project
         * @instance
         */
        add_group_into_project.prototype.group = "";

        /**
         * Creates a new add_group_into_project instance using the specified properties.
         * @function create
         * @memberof client_to_svr.add_group_into_project
         * @static
         * @param {client_to_svr.Iadd_group_into_project=} [properties] Properties to set
         * @returns {client_to_svr.add_group_into_project} add_group_into_project instance
         */
        add_group_into_project.create = function create(properties) {
            return new add_group_into_project(properties);
        };

        /**
         * Encodes the specified add_group_into_project message. Does not implicitly {@link client_to_svr.add_group_into_project.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.add_group_into_project
         * @static
         * @param {client_to_svr.Iadd_group_into_project} message add_group_into_project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        add_group_into_project.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.project);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.group);
            return writer;
        };

        /**
         * Encodes the specified add_group_into_project message, length delimited. Does not implicitly {@link client_to_svr.add_group_into_project.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.add_group_into_project
         * @static
         * @param {client_to_svr.Iadd_group_into_project} message add_group_into_project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        add_group_into_project.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an add_group_into_project message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.add_group_into_project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.add_group_into_project} add_group_into_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        add_group_into_project.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.add_group_into_project();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.parent = reader.string();
                    break;
                case 2:
                    message.project = reader.string();
                    break;
                case 3:
                    message.group = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("parent"))
                throw $util.ProtocolError("missing required 'parent'", { instance: message });
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            if (!message.hasOwnProperty("group"))
                throw $util.ProtocolError("missing required 'group'", { instance: message });
            return message;
        };

        /**
         * Decodes an add_group_into_project message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.add_group_into_project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.add_group_into_project} add_group_into_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        add_group_into_project.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an add_group_into_project message.
         * @function verify
         * @memberof client_to_svr.add_group_into_project
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        add_group_into_project.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.parent))
                return "parent: string expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            if (!$util.isString(message.group))
                return "group: string expected";
            return null;
        };

        return add_group_into_project;
    })();

    client_to_svr.remove_group_from_project = (function() {

        /**
         * Properties of a remove_group_from_project.
         * @memberof client_to_svr
         * @interface Iremove_group_from_project
         * @property {string} parent remove_group_from_project parent
         * @property {string} project remove_group_from_project project
         * @property {string} group remove_group_from_project group
         */

        /**
         * Constructs a new remove_group_from_project.
         * @memberof client_to_svr
         * @classdesc Represents a remove_group_from_project.
         * @implements Iremove_group_from_project
         * @constructor
         * @param {client_to_svr.Iremove_group_from_project=} [properties] Properties to set
         */
        function remove_group_from_project(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * remove_group_from_project parent.
         * @member {string} parent
         * @memberof client_to_svr.remove_group_from_project
         * @instance
         */
        remove_group_from_project.prototype.parent = "";

        /**
         * remove_group_from_project project.
         * @member {string} project
         * @memberof client_to_svr.remove_group_from_project
         * @instance
         */
        remove_group_from_project.prototype.project = "";

        /**
         * remove_group_from_project group.
         * @member {string} group
         * @memberof client_to_svr.remove_group_from_project
         * @instance
         */
        remove_group_from_project.prototype.group = "";

        /**
         * Creates a new remove_group_from_project instance using the specified properties.
         * @function create
         * @memberof client_to_svr.remove_group_from_project
         * @static
         * @param {client_to_svr.Iremove_group_from_project=} [properties] Properties to set
         * @returns {client_to_svr.remove_group_from_project} remove_group_from_project instance
         */
        remove_group_from_project.create = function create(properties) {
            return new remove_group_from_project(properties);
        };

        /**
         * Encodes the specified remove_group_from_project message. Does not implicitly {@link client_to_svr.remove_group_from_project.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.remove_group_from_project
         * @static
         * @param {client_to_svr.Iremove_group_from_project} message remove_group_from_project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        remove_group_from_project.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.project);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.group);
            return writer;
        };

        /**
         * Encodes the specified remove_group_from_project message, length delimited. Does not implicitly {@link client_to_svr.remove_group_from_project.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.remove_group_from_project
         * @static
         * @param {client_to_svr.Iremove_group_from_project} message remove_group_from_project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        remove_group_from_project.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a remove_group_from_project message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.remove_group_from_project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.remove_group_from_project} remove_group_from_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        remove_group_from_project.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.remove_group_from_project();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.parent = reader.string();
                    break;
                case 2:
                    message.project = reader.string();
                    break;
                case 3:
                    message.group = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("parent"))
                throw $util.ProtocolError("missing required 'parent'", { instance: message });
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            if (!message.hasOwnProperty("group"))
                throw $util.ProtocolError("missing required 'group'", { instance: message });
            return message;
        };

        /**
         * Decodes a remove_group_from_project message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.remove_group_from_project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.remove_group_from_project} remove_group_from_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        remove_group_from_project.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a remove_group_from_project message.
         * @function verify
         * @memberof client_to_svr.remove_group_from_project
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        remove_group_from_project.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.parent))
                return "parent: string expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            if (!$util.isString(message.group))
                return "group: string expected";
            return null;
        };

        return remove_group_from_project;
    })();

    client_to_svr.add_user_into_project = (function() {

        /**
         * Properties of an add_user_into_project.
         * @memberof client_to_svr
         * @interface Iadd_user_into_project
         * @property {string} parent add_user_into_project parent
         * @property {string} project add_user_into_project project
         * @property {string} name add_user_into_project name
         */

        /**
         * Constructs a new add_user_into_project.
         * @memberof client_to_svr
         * @classdesc Represents an add_user_into_project.
         * @implements Iadd_user_into_project
         * @constructor
         * @param {client_to_svr.Iadd_user_into_project=} [properties] Properties to set
         */
        function add_user_into_project(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * add_user_into_project parent.
         * @member {string} parent
         * @memberof client_to_svr.add_user_into_project
         * @instance
         */
        add_user_into_project.prototype.parent = "";

        /**
         * add_user_into_project project.
         * @member {string} project
         * @memberof client_to_svr.add_user_into_project
         * @instance
         */
        add_user_into_project.prototype.project = "";

        /**
         * add_user_into_project name.
         * @member {string} name
         * @memberof client_to_svr.add_user_into_project
         * @instance
         */
        add_user_into_project.prototype.name = "";

        /**
         * Creates a new add_user_into_project instance using the specified properties.
         * @function create
         * @memberof client_to_svr.add_user_into_project
         * @static
         * @param {client_to_svr.Iadd_user_into_project=} [properties] Properties to set
         * @returns {client_to_svr.add_user_into_project} add_user_into_project instance
         */
        add_user_into_project.create = function create(properties) {
            return new add_user_into_project(properties);
        };

        /**
         * Encodes the specified add_user_into_project message. Does not implicitly {@link client_to_svr.add_user_into_project.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.add_user_into_project
         * @static
         * @param {client_to_svr.Iadd_user_into_project} message add_user_into_project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        add_user_into_project.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.project);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified add_user_into_project message, length delimited. Does not implicitly {@link client_to_svr.add_user_into_project.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.add_user_into_project
         * @static
         * @param {client_to_svr.Iadd_user_into_project} message add_user_into_project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        add_user_into_project.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an add_user_into_project message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.add_user_into_project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.add_user_into_project} add_user_into_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        add_user_into_project.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.add_user_into_project();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.parent = reader.string();
                    break;
                case 2:
                    message.project = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("parent"))
                throw $util.ProtocolError("missing required 'parent'", { instance: message });
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes an add_user_into_project message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.add_user_into_project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.add_user_into_project} add_user_into_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        add_user_into_project.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an add_user_into_project message.
         * @function verify
         * @memberof client_to_svr.add_user_into_project
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        add_user_into_project.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.parent))
                return "parent: string expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            return null;
        };

        return add_user_into_project;
    })();

    client_to_svr.remove_user_from_project = (function() {

        /**
         * Properties of a remove_user_from_project.
         * @memberof client_to_svr
         * @interface Iremove_user_from_project
         * @property {string} parent remove_user_from_project parent
         * @property {string} project remove_user_from_project project
         * @property {string} name remove_user_from_project name
         */

        /**
         * Constructs a new remove_user_from_project.
         * @memberof client_to_svr
         * @classdesc Represents a remove_user_from_project.
         * @implements Iremove_user_from_project
         * @constructor
         * @param {client_to_svr.Iremove_user_from_project=} [properties] Properties to set
         */
        function remove_user_from_project(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * remove_user_from_project parent.
         * @member {string} parent
         * @memberof client_to_svr.remove_user_from_project
         * @instance
         */
        remove_user_from_project.prototype.parent = "";

        /**
         * remove_user_from_project project.
         * @member {string} project
         * @memberof client_to_svr.remove_user_from_project
         * @instance
         */
        remove_user_from_project.prototype.project = "";

        /**
         * remove_user_from_project name.
         * @member {string} name
         * @memberof client_to_svr.remove_user_from_project
         * @instance
         */
        remove_user_from_project.prototype.name = "";

        /**
         * Creates a new remove_user_from_project instance using the specified properties.
         * @function create
         * @memberof client_to_svr.remove_user_from_project
         * @static
         * @param {client_to_svr.Iremove_user_from_project=} [properties] Properties to set
         * @returns {client_to_svr.remove_user_from_project} remove_user_from_project instance
         */
        remove_user_from_project.create = function create(properties) {
            return new remove_user_from_project(properties);
        };

        /**
         * Encodes the specified remove_user_from_project message. Does not implicitly {@link client_to_svr.remove_user_from_project.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.remove_user_from_project
         * @static
         * @param {client_to_svr.Iremove_user_from_project} message remove_user_from_project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        remove_user_from_project.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.project);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified remove_user_from_project message, length delimited. Does not implicitly {@link client_to_svr.remove_user_from_project.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.remove_user_from_project
         * @static
         * @param {client_to_svr.Iremove_user_from_project} message remove_user_from_project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        remove_user_from_project.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a remove_user_from_project message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.remove_user_from_project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.remove_user_from_project} remove_user_from_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        remove_user_from_project.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.remove_user_from_project();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.parent = reader.string();
                    break;
                case 2:
                    message.project = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("parent"))
                throw $util.ProtocolError("missing required 'parent'", { instance: message });
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a remove_user_from_project message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.remove_user_from_project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.remove_user_from_project} remove_user_from_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        remove_user_from_project.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a remove_user_from_project message.
         * @function verify
         * @memberof client_to_svr.remove_user_from_project
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        remove_user_from_project.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.parent))
                return "parent: string expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            return null;
        };

        return remove_user_from_project;
    })();

    client_to_svr.create_group = (function() {

        /**
         * Properties of a create_group.
         * @memberof client_to_svr
         * @interface Icreate_group
         * @property {string} group create_group group
         */

        /**
         * Constructs a new create_group.
         * @memberof client_to_svr
         * @classdesc Represents a create_group.
         * @implements Icreate_group
         * @constructor
         * @param {client_to_svr.Icreate_group=} [properties] Properties to set
         */
        function create_group(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * create_group group.
         * @member {string} group
         * @memberof client_to_svr.create_group
         * @instance
         */
        create_group.prototype.group = "";

        /**
         * Creates a new create_group instance using the specified properties.
         * @function create
         * @memberof client_to_svr.create_group
         * @static
         * @param {client_to_svr.Icreate_group=} [properties] Properties to set
         * @returns {client_to_svr.create_group} create_group instance
         */
        create_group.create = function create(properties) {
            return new create_group(properties);
        };

        /**
         * Encodes the specified create_group message. Does not implicitly {@link client_to_svr.create_group.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.create_group
         * @static
         * @param {client_to_svr.Icreate_group} message create_group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        create_group.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.group);
            return writer;
        };

        /**
         * Encodes the specified create_group message, length delimited. Does not implicitly {@link client_to_svr.create_group.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.create_group
         * @static
         * @param {client_to_svr.Icreate_group} message create_group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        create_group.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a create_group message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.create_group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.create_group} create_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        create_group.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.create_group();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.group = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("group"))
                throw $util.ProtocolError("missing required 'group'", { instance: message });
            return message;
        };

        /**
         * Decodes a create_group message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.create_group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.create_group} create_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        create_group.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a create_group message.
         * @function verify
         * @memberof client_to_svr.create_group
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        create_group.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.group))
                return "group: string expected";
            return null;
        };

        return create_group;
    })();

    client_to_svr.add_user_into_group = (function() {

        /**
         * Properties of an add_user_into_group.
         * @memberof client_to_svr
         * @interface Iadd_user_into_group
         * @property {string} group add_user_into_group group
         * @property {string} name add_user_into_group name
         */

        /**
         * Constructs a new add_user_into_group.
         * @memberof client_to_svr
         * @classdesc Represents an add_user_into_group.
         * @implements Iadd_user_into_group
         * @constructor
         * @param {client_to_svr.Iadd_user_into_group=} [properties] Properties to set
         */
        function add_user_into_group(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * add_user_into_group group.
         * @member {string} group
         * @memberof client_to_svr.add_user_into_group
         * @instance
         */
        add_user_into_group.prototype.group = "";

        /**
         * add_user_into_group name.
         * @member {string} name
         * @memberof client_to_svr.add_user_into_group
         * @instance
         */
        add_user_into_group.prototype.name = "";

        /**
         * Creates a new add_user_into_group instance using the specified properties.
         * @function create
         * @memberof client_to_svr.add_user_into_group
         * @static
         * @param {client_to_svr.Iadd_user_into_group=} [properties] Properties to set
         * @returns {client_to_svr.add_user_into_group} add_user_into_group instance
         */
        add_user_into_group.create = function create(properties) {
            return new add_user_into_group(properties);
        };

        /**
         * Encodes the specified add_user_into_group message. Does not implicitly {@link client_to_svr.add_user_into_group.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.add_user_into_group
         * @static
         * @param {client_to_svr.Iadd_user_into_group} message add_user_into_group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        add_user_into_group.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.group);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified add_user_into_group message, length delimited. Does not implicitly {@link client_to_svr.add_user_into_group.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.add_user_into_group
         * @static
         * @param {client_to_svr.Iadd_user_into_group} message add_user_into_group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        add_user_into_group.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an add_user_into_group message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.add_user_into_group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.add_user_into_group} add_user_into_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        add_user_into_group.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.add_user_into_group();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.group = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("group"))
                throw $util.ProtocolError("missing required 'group'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes an add_user_into_group message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.add_user_into_group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.add_user_into_group} add_user_into_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        add_user_into_group.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an add_user_into_group message.
         * @function verify
         * @memberof client_to_svr.add_user_into_group
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        add_user_into_group.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.group))
                return "group: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            return null;
        };

        return add_user_into_group;
    })();

    client_to_svr.remove_user_from_group = (function() {

        /**
         * Properties of a remove_user_from_group.
         * @memberof client_to_svr
         * @interface Iremove_user_from_group
         * @property {string} group remove_user_from_group group
         * @property {string} name remove_user_from_group name
         */

        /**
         * Constructs a new remove_user_from_group.
         * @memberof client_to_svr
         * @classdesc Represents a remove_user_from_group.
         * @implements Iremove_user_from_group
         * @constructor
         * @param {client_to_svr.Iremove_user_from_group=} [properties] Properties to set
         */
        function remove_user_from_group(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * remove_user_from_group group.
         * @member {string} group
         * @memberof client_to_svr.remove_user_from_group
         * @instance
         */
        remove_user_from_group.prototype.group = "";

        /**
         * remove_user_from_group name.
         * @member {string} name
         * @memberof client_to_svr.remove_user_from_group
         * @instance
         */
        remove_user_from_group.prototype.name = "";

        /**
         * Creates a new remove_user_from_group instance using the specified properties.
         * @function create
         * @memberof client_to_svr.remove_user_from_group
         * @static
         * @param {client_to_svr.Iremove_user_from_group=} [properties] Properties to set
         * @returns {client_to_svr.remove_user_from_group} remove_user_from_group instance
         */
        remove_user_from_group.create = function create(properties) {
            return new remove_user_from_group(properties);
        };

        /**
         * Encodes the specified remove_user_from_group message. Does not implicitly {@link client_to_svr.remove_user_from_group.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.remove_user_from_group
         * @static
         * @param {client_to_svr.Iremove_user_from_group} message remove_user_from_group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        remove_user_from_group.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.group);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified remove_user_from_group message, length delimited. Does not implicitly {@link client_to_svr.remove_user_from_group.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.remove_user_from_group
         * @static
         * @param {client_to_svr.Iremove_user_from_group} message remove_user_from_group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        remove_user_from_group.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a remove_user_from_group message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.remove_user_from_group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.remove_user_from_group} remove_user_from_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        remove_user_from_group.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.remove_user_from_group();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.group = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("group"))
                throw $util.ProtocolError("missing required 'group'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a remove_user_from_group message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.remove_user_from_group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.remove_user_from_group} remove_user_from_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        remove_user_from_group.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a remove_user_from_group message.
         * @function verify
         * @memberof client_to_svr.remove_user_from_group
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        remove_user_from_group.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.group))
                return "group: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            return null;
        };

        return remove_user_from_group;
    })();

    client_to_svr.set_user_project_permission = (function() {

        /**
         * Properties of a set_user_project_permission.
         * @memberof client_to_svr
         * @interface Iset_user_project_permission
         * @property {string} name set_user_project_permission name
         * @property {string} parent set_user_project_permission parent
         * @property {string} project set_user_project_permission project
         * @property {Array.<common.permission_type>|null} [permission] set_user_project_permission permission
         */

        /**
         * Constructs a new set_user_project_permission.
         * @memberof client_to_svr
         * @classdesc Represents a set_user_project_permission.
         * @implements Iset_user_project_permission
         * @constructor
         * @param {client_to_svr.Iset_user_project_permission=} [properties] Properties to set
         */
        function set_user_project_permission(properties) {
            this.permission = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * set_user_project_permission name.
         * @member {string} name
         * @memberof client_to_svr.set_user_project_permission
         * @instance
         */
        set_user_project_permission.prototype.name = "";

        /**
         * set_user_project_permission parent.
         * @member {string} parent
         * @memberof client_to_svr.set_user_project_permission
         * @instance
         */
        set_user_project_permission.prototype.parent = "";

        /**
         * set_user_project_permission project.
         * @member {string} project
         * @memberof client_to_svr.set_user_project_permission
         * @instance
         */
        set_user_project_permission.prototype.project = "";

        /**
         * set_user_project_permission permission.
         * @member {Array.<common.permission_type>} permission
         * @memberof client_to_svr.set_user_project_permission
         * @instance
         */
        set_user_project_permission.prototype.permission = $util.emptyArray;

        /**
         * Creates a new set_user_project_permission instance using the specified properties.
         * @function create
         * @memberof client_to_svr.set_user_project_permission
         * @static
         * @param {client_to_svr.Iset_user_project_permission=} [properties] Properties to set
         * @returns {client_to_svr.set_user_project_permission} set_user_project_permission instance
         */
        set_user_project_permission.create = function create(properties) {
            return new set_user_project_permission(properties);
        };

        /**
         * Encodes the specified set_user_project_permission message. Does not implicitly {@link client_to_svr.set_user_project_permission.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.set_user_project_permission
         * @static
         * @param {client_to_svr.Iset_user_project_permission} message set_user_project_permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        set_user_project_permission.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.parent);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.project);
            if (message.permission != null && message.permission.length)
                for (var i = 0; i < message.permission.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.permission[i]);
            return writer;
        };

        /**
         * Encodes the specified set_user_project_permission message, length delimited. Does not implicitly {@link client_to_svr.set_user_project_permission.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.set_user_project_permission
         * @static
         * @param {client_to_svr.Iset_user_project_permission} message set_user_project_permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        set_user_project_permission.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a set_user_project_permission message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.set_user_project_permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.set_user_project_permission} set_user_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        set_user_project_permission.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.set_user_project_permission();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.parent = reader.string();
                    break;
                case 3:
                    message.project = reader.string();
                    break;
                case 4:
                    if (!(message.permission && message.permission.length))
                        message.permission = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.permission.push(reader.int32());
                    } else
                        message.permission.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("parent"))
                throw $util.ProtocolError("missing required 'parent'", { instance: message });
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            return message;
        };

        /**
         * Decodes a set_user_project_permission message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.set_user_project_permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.set_user_project_permission} set_user_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        set_user_project_permission.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a set_user_project_permission message.
         * @function verify
         * @memberof client_to_svr.set_user_project_permission
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        set_user_project_permission.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.parent))
                return "parent: string expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            if (message.permission != null && message.hasOwnProperty("permission")) {
                if (!Array.isArray(message.permission))
                    return "permission: array expected";
                for (var i = 0; i < message.permission.length; ++i)
                    switch (message.permission[i]) {
                    default:
                        return "permission: enum value[] expected";
                    case -1:
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 24:
                    case 25:
                    case 26:
                    case 27:
                    case 28:
                    case 29:
                    case 30:
                    case 31:
                    case 32:
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                        break;
                    }
            }
            return null;
        };

        return set_user_project_permission;
    })();

    client_to_svr.set_group_project_permission = (function() {

        /**
         * Properties of a set_group_project_permission.
         * @memberof client_to_svr
         * @interface Iset_group_project_permission
         * @property {string} group set_group_project_permission group
         * @property {string} parent set_group_project_permission parent
         * @property {string} project set_group_project_permission project
         * @property {Array.<common.permission_type>|null} [permission] set_group_project_permission permission
         */

        /**
         * Constructs a new set_group_project_permission.
         * @memberof client_to_svr
         * @classdesc Represents a set_group_project_permission.
         * @implements Iset_group_project_permission
         * @constructor
         * @param {client_to_svr.Iset_group_project_permission=} [properties] Properties to set
         */
        function set_group_project_permission(properties) {
            this.permission = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * set_group_project_permission group.
         * @member {string} group
         * @memberof client_to_svr.set_group_project_permission
         * @instance
         */
        set_group_project_permission.prototype.group = "";

        /**
         * set_group_project_permission parent.
         * @member {string} parent
         * @memberof client_to_svr.set_group_project_permission
         * @instance
         */
        set_group_project_permission.prototype.parent = "";

        /**
         * set_group_project_permission project.
         * @member {string} project
         * @memberof client_to_svr.set_group_project_permission
         * @instance
         */
        set_group_project_permission.prototype.project = "";

        /**
         * set_group_project_permission permission.
         * @member {Array.<common.permission_type>} permission
         * @memberof client_to_svr.set_group_project_permission
         * @instance
         */
        set_group_project_permission.prototype.permission = $util.emptyArray;

        /**
         * Creates a new set_group_project_permission instance using the specified properties.
         * @function create
         * @memberof client_to_svr.set_group_project_permission
         * @static
         * @param {client_to_svr.Iset_group_project_permission=} [properties] Properties to set
         * @returns {client_to_svr.set_group_project_permission} set_group_project_permission instance
         */
        set_group_project_permission.create = function create(properties) {
            return new set_group_project_permission(properties);
        };

        /**
         * Encodes the specified set_group_project_permission message. Does not implicitly {@link client_to_svr.set_group_project_permission.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.set_group_project_permission
         * @static
         * @param {client_to_svr.Iset_group_project_permission} message set_group_project_permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        set_group_project_permission.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.group);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.parent);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.project);
            if (message.permission != null && message.permission.length)
                for (var i = 0; i < message.permission.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.permission[i]);
            return writer;
        };

        /**
         * Encodes the specified set_group_project_permission message, length delimited. Does not implicitly {@link client_to_svr.set_group_project_permission.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.set_group_project_permission
         * @static
         * @param {client_to_svr.Iset_group_project_permission} message set_group_project_permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        set_group_project_permission.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a set_group_project_permission message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.set_group_project_permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.set_group_project_permission} set_group_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        set_group_project_permission.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.set_group_project_permission();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.group = reader.string();
                    break;
                case 2:
                    message.parent = reader.string();
                    break;
                case 3:
                    message.project = reader.string();
                    break;
                case 4:
                    if (!(message.permission && message.permission.length))
                        message.permission = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.permission.push(reader.int32());
                    } else
                        message.permission.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("group"))
                throw $util.ProtocolError("missing required 'group'", { instance: message });
            if (!message.hasOwnProperty("parent"))
                throw $util.ProtocolError("missing required 'parent'", { instance: message });
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            return message;
        };

        /**
         * Decodes a set_group_project_permission message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.set_group_project_permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.set_group_project_permission} set_group_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        set_group_project_permission.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a set_group_project_permission message.
         * @function verify
         * @memberof client_to_svr.set_group_project_permission
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        set_group_project_permission.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.group))
                return "group: string expected";
            if (!$util.isString(message.parent))
                return "parent: string expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            if (message.permission != null && message.hasOwnProperty("permission")) {
                if (!Array.isArray(message.permission))
                    return "permission: array expected";
                for (var i = 0; i < message.permission.length; ++i)
                    switch (message.permission[i]) {
                    default:
                        return "permission: enum value[] expected";
                    case -1:
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 24:
                    case 25:
                    case 26:
                    case 27:
                    case 28:
                    case 29:
                    case 30:
                    case 31:
                    case 32:
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                        break;
                    }
            }
            return null;
        };

        return set_group_project_permission;
    })();

    client_to_svr.get_project_member = (function() {

        /**
         * Properties of a get_project_member.
         * @memberof client_to_svr
         * @interface Iget_project_member
         * @property {string} parent get_project_member parent
         * @property {string} project get_project_member project
         */

        /**
         * Constructs a new get_project_member.
         * @memberof client_to_svr
         * @classdesc Represents a get_project_member.
         * @implements Iget_project_member
         * @constructor
         * @param {client_to_svr.Iget_project_member=} [properties] Properties to set
         */
        function get_project_member(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * get_project_member parent.
         * @member {string} parent
         * @memberof client_to_svr.get_project_member
         * @instance
         */
        get_project_member.prototype.parent = "";

        /**
         * get_project_member project.
         * @member {string} project
         * @memberof client_to_svr.get_project_member
         * @instance
         */
        get_project_member.prototype.project = "";

        /**
         * Creates a new get_project_member instance using the specified properties.
         * @function create
         * @memberof client_to_svr.get_project_member
         * @static
         * @param {client_to_svr.Iget_project_member=} [properties] Properties to set
         * @returns {client_to_svr.get_project_member} get_project_member instance
         */
        get_project_member.create = function create(properties) {
            return new get_project_member(properties);
        };

        /**
         * Encodes the specified get_project_member message. Does not implicitly {@link client_to_svr.get_project_member.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.get_project_member
         * @static
         * @param {client_to_svr.Iget_project_member} message get_project_member message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_project_member.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.project);
            return writer;
        };

        /**
         * Encodes the specified get_project_member message, length delimited. Does not implicitly {@link client_to_svr.get_project_member.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.get_project_member
         * @static
         * @param {client_to_svr.Iget_project_member} message get_project_member message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_project_member.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a get_project_member message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.get_project_member
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.get_project_member} get_project_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_project_member.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.get_project_member();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.parent = reader.string();
                    break;
                case 2:
                    message.project = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("parent"))
                throw $util.ProtocolError("missing required 'parent'", { instance: message });
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            return message;
        };

        /**
         * Decodes a get_project_member message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.get_project_member
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.get_project_member} get_project_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_project_member.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a get_project_member message.
         * @function verify
         * @memberof client_to_svr.get_project_member
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        get_project_member.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.parent))
                return "parent: string expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            return null;
        };

        return get_project_member;
    })();

    client_to_svr.get_group_member = (function() {

        /**
         * Properties of a get_group_member.
         * @memberof client_to_svr
         * @interface Iget_group_member
         * @property {string} group get_group_member group
         */

        /**
         * Constructs a new get_group_member.
         * @memberof client_to_svr
         * @classdesc Represents a get_group_member.
         * @implements Iget_group_member
         * @constructor
         * @param {client_to_svr.Iget_group_member=} [properties] Properties to set
         */
        function get_group_member(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * get_group_member group.
         * @member {string} group
         * @memberof client_to_svr.get_group_member
         * @instance
         */
        get_group_member.prototype.group = "";

        /**
         * Creates a new get_group_member instance using the specified properties.
         * @function create
         * @memberof client_to_svr.get_group_member
         * @static
         * @param {client_to_svr.Iget_group_member=} [properties] Properties to set
         * @returns {client_to_svr.get_group_member} get_group_member instance
         */
        get_group_member.create = function create(properties) {
            return new get_group_member(properties);
        };

        /**
         * Encodes the specified get_group_member message. Does not implicitly {@link client_to_svr.get_group_member.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.get_group_member
         * @static
         * @param {client_to_svr.Iget_group_member} message get_group_member message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_group_member.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.group);
            return writer;
        };

        /**
         * Encodes the specified get_group_member message, length delimited. Does not implicitly {@link client_to_svr.get_group_member.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.get_group_member
         * @static
         * @param {client_to_svr.Iget_group_member} message get_group_member message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_group_member.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a get_group_member message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.get_group_member
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.get_group_member} get_group_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_group_member.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.get_group_member();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.group = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("group"))
                throw $util.ProtocolError("missing required 'group'", { instance: message });
            return message;
        };

        /**
         * Decodes a get_group_member message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.get_group_member
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.get_group_member} get_group_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_group_member.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a get_group_member message.
         * @function verify
         * @memberof client_to_svr.get_group_member
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        get_group_member.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.group))
                return "group: string expected";
            return null;
        };

        return get_group_member;
    })();

    client_to_svr.get_user_project_permission = (function() {

        /**
         * Properties of a get_user_project_permission.
         * @memberof client_to_svr
         * @interface Iget_user_project_permission
         * @property {string} name get_user_project_permission name
         * @property {string} parent get_user_project_permission parent
         * @property {string} project get_user_project_permission project
         */

        /**
         * Constructs a new get_user_project_permission.
         * @memberof client_to_svr
         * @classdesc Represents a get_user_project_permission.
         * @implements Iget_user_project_permission
         * @constructor
         * @param {client_to_svr.Iget_user_project_permission=} [properties] Properties to set
         */
        function get_user_project_permission(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * get_user_project_permission name.
         * @member {string} name
         * @memberof client_to_svr.get_user_project_permission
         * @instance
         */
        get_user_project_permission.prototype.name = "";

        /**
         * get_user_project_permission parent.
         * @member {string} parent
         * @memberof client_to_svr.get_user_project_permission
         * @instance
         */
        get_user_project_permission.prototype.parent = "";

        /**
         * get_user_project_permission project.
         * @member {string} project
         * @memberof client_to_svr.get_user_project_permission
         * @instance
         */
        get_user_project_permission.prototype.project = "";

        /**
         * Creates a new get_user_project_permission instance using the specified properties.
         * @function create
         * @memberof client_to_svr.get_user_project_permission
         * @static
         * @param {client_to_svr.Iget_user_project_permission=} [properties] Properties to set
         * @returns {client_to_svr.get_user_project_permission} get_user_project_permission instance
         */
        get_user_project_permission.create = function create(properties) {
            return new get_user_project_permission(properties);
        };

        /**
         * Encodes the specified get_user_project_permission message. Does not implicitly {@link client_to_svr.get_user_project_permission.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.get_user_project_permission
         * @static
         * @param {client_to_svr.Iget_user_project_permission} message get_user_project_permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_user_project_permission.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.parent);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.project);
            return writer;
        };

        /**
         * Encodes the specified get_user_project_permission message, length delimited. Does not implicitly {@link client_to_svr.get_user_project_permission.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.get_user_project_permission
         * @static
         * @param {client_to_svr.Iget_user_project_permission} message get_user_project_permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_user_project_permission.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a get_user_project_permission message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.get_user_project_permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.get_user_project_permission} get_user_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_user_project_permission.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.get_user_project_permission();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.parent = reader.string();
                    break;
                case 3:
                    message.project = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("parent"))
                throw $util.ProtocolError("missing required 'parent'", { instance: message });
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            return message;
        };

        /**
         * Decodes a get_user_project_permission message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.get_user_project_permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.get_user_project_permission} get_user_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_user_project_permission.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a get_user_project_permission message.
         * @function verify
         * @memberof client_to_svr.get_user_project_permission
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        get_user_project_permission.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.parent))
                return "parent: string expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            return null;
        };

        return get_user_project_permission;
    })();

    client_to_svr.get_group_project_permission = (function() {

        /**
         * Properties of a get_group_project_permission.
         * @memberof client_to_svr
         * @interface Iget_group_project_permission
         * @property {string} group get_group_project_permission group
         * @property {string} parent get_group_project_permission parent
         * @property {string} project get_group_project_permission project
         */

        /**
         * Constructs a new get_group_project_permission.
         * @memberof client_to_svr
         * @classdesc Represents a get_group_project_permission.
         * @implements Iget_group_project_permission
         * @constructor
         * @param {client_to_svr.Iget_group_project_permission=} [properties] Properties to set
         */
        function get_group_project_permission(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * get_group_project_permission group.
         * @member {string} group
         * @memberof client_to_svr.get_group_project_permission
         * @instance
         */
        get_group_project_permission.prototype.group = "";

        /**
         * get_group_project_permission parent.
         * @member {string} parent
         * @memberof client_to_svr.get_group_project_permission
         * @instance
         */
        get_group_project_permission.prototype.parent = "";

        /**
         * get_group_project_permission project.
         * @member {string} project
         * @memberof client_to_svr.get_group_project_permission
         * @instance
         */
        get_group_project_permission.prototype.project = "";

        /**
         * Creates a new get_group_project_permission instance using the specified properties.
         * @function create
         * @memberof client_to_svr.get_group_project_permission
         * @static
         * @param {client_to_svr.Iget_group_project_permission=} [properties] Properties to set
         * @returns {client_to_svr.get_group_project_permission} get_group_project_permission instance
         */
        get_group_project_permission.create = function create(properties) {
            return new get_group_project_permission(properties);
        };

        /**
         * Encodes the specified get_group_project_permission message. Does not implicitly {@link client_to_svr.get_group_project_permission.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.get_group_project_permission
         * @static
         * @param {client_to_svr.Iget_group_project_permission} message get_group_project_permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_group_project_permission.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.group);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.parent);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.project);
            return writer;
        };

        /**
         * Encodes the specified get_group_project_permission message, length delimited. Does not implicitly {@link client_to_svr.get_group_project_permission.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.get_group_project_permission
         * @static
         * @param {client_to_svr.Iget_group_project_permission} message get_group_project_permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_group_project_permission.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a get_group_project_permission message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.get_group_project_permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.get_group_project_permission} get_group_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_group_project_permission.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.get_group_project_permission();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.group = reader.string();
                    break;
                case 2:
                    message.parent = reader.string();
                    break;
                case 3:
                    message.project = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("group"))
                throw $util.ProtocolError("missing required 'group'", { instance: message });
            if (!message.hasOwnProperty("parent"))
                throw $util.ProtocolError("missing required 'parent'", { instance: message });
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            return message;
        };

        /**
         * Decodes a get_group_project_permission message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.get_group_project_permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.get_group_project_permission} get_group_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_group_project_permission.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a get_group_project_permission message.
         * @function verify
         * @memberof client_to_svr.get_group_project_permission
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        get_group_project_permission.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.group))
                return "group: string expected";
            if (!$util.isString(message.parent))
                return "parent: string expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            return null;
        };

        return get_group_project_permission;
    })();

    client_to_svr.get_all_project = (function() {

        /**
         * Properties of a get_all_project.
         * @memberof client_to_svr
         * @interface Iget_all_project
         */

        /**
         * Constructs a new get_all_project.
         * @memberof client_to_svr
         * @classdesc Represents a get_all_project.
         * @implements Iget_all_project
         * @constructor
         * @param {client_to_svr.Iget_all_project=} [properties] Properties to set
         */
        function get_all_project(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new get_all_project instance using the specified properties.
         * @function create
         * @memberof client_to_svr.get_all_project
         * @static
         * @param {client_to_svr.Iget_all_project=} [properties] Properties to set
         * @returns {client_to_svr.get_all_project} get_all_project instance
         */
        get_all_project.create = function create(properties) {
            return new get_all_project(properties);
        };

        /**
         * Encodes the specified get_all_project message. Does not implicitly {@link client_to_svr.get_all_project.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.get_all_project
         * @static
         * @param {client_to_svr.Iget_all_project} message get_all_project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_all_project.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified get_all_project message, length delimited. Does not implicitly {@link client_to_svr.get_all_project.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.get_all_project
         * @static
         * @param {client_to_svr.Iget_all_project} message get_all_project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_all_project.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a get_all_project message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.get_all_project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.get_all_project} get_all_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_all_project.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.get_all_project();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a get_all_project message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.get_all_project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.get_all_project} get_all_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_all_project.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a get_all_project message.
         * @function verify
         * @memberof client_to_svr.get_all_project
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        get_all_project.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return get_all_project;
    })();

    client_to_svr.get_all_group = (function() {

        /**
         * Properties of a get_all_group.
         * @memberof client_to_svr
         * @interface Iget_all_group
         */

        /**
         * Constructs a new get_all_group.
         * @memberof client_to_svr
         * @classdesc Represents a get_all_group.
         * @implements Iget_all_group
         * @constructor
         * @param {client_to_svr.Iget_all_group=} [properties] Properties to set
         */
        function get_all_group(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new get_all_group instance using the specified properties.
         * @function create
         * @memberof client_to_svr.get_all_group
         * @static
         * @param {client_to_svr.Iget_all_group=} [properties] Properties to set
         * @returns {client_to_svr.get_all_group} get_all_group instance
         */
        get_all_group.create = function create(properties) {
            return new get_all_group(properties);
        };

        /**
         * Encodes the specified get_all_group message. Does not implicitly {@link client_to_svr.get_all_group.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.get_all_group
         * @static
         * @param {client_to_svr.Iget_all_group} message get_all_group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_all_group.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified get_all_group message, length delimited. Does not implicitly {@link client_to_svr.get_all_group.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.get_all_group
         * @static
         * @param {client_to_svr.Iget_all_group} message get_all_group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_all_group.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a get_all_group message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.get_all_group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.get_all_group} get_all_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_all_group.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.get_all_group();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a get_all_group message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.get_all_group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.get_all_group} get_all_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_all_group.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a get_all_group message.
         * @function verify
         * @memberof client_to_svr.get_all_group
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        get_all_group.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return get_all_group;
    })();

    client_to_svr.confirm_verification_code = (function() {

        /**
         * Properties of a confirm_verification_code.
         * @memberof client_to_svr
         * @interface Iconfirm_verification_code
         * @property {string} verification_code confirm_verification_code verification_code
         */

        /**
         * Constructs a new confirm_verification_code.
         * @memberof client_to_svr
         * @classdesc Represents a confirm_verification_code.
         * @implements Iconfirm_verification_code
         * @constructor
         * @param {client_to_svr.Iconfirm_verification_code=} [properties] Properties to set
         */
        function confirm_verification_code(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * confirm_verification_code verification_code.
         * @member {string} verification_code
         * @memberof client_to_svr.confirm_verification_code
         * @instance
         */
        confirm_verification_code.prototype.verification_code = "";

        /**
         * Creates a new confirm_verification_code instance using the specified properties.
         * @function create
         * @memberof client_to_svr.confirm_verification_code
         * @static
         * @param {client_to_svr.Iconfirm_verification_code=} [properties] Properties to set
         * @returns {client_to_svr.confirm_verification_code} confirm_verification_code instance
         */
        confirm_verification_code.create = function create(properties) {
            return new confirm_verification_code(properties);
        };

        /**
         * Encodes the specified confirm_verification_code message. Does not implicitly {@link client_to_svr.confirm_verification_code.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.confirm_verification_code
         * @static
         * @param {client_to_svr.Iconfirm_verification_code} message confirm_verification_code message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        confirm_verification_code.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.verification_code);
            return writer;
        };

        /**
         * Encodes the specified confirm_verification_code message, length delimited. Does not implicitly {@link client_to_svr.confirm_verification_code.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.confirm_verification_code
         * @static
         * @param {client_to_svr.Iconfirm_verification_code} message confirm_verification_code message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        confirm_verification_code.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a confirm_verification_code message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.confirm_verification_code
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.confirm_verification_code} confirm_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        confirm_verification_code.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.confirm_verification_code();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.verification_code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("verification_code"))
                throw $util.ProtocolError("missing required 'verification_code'", { instance: message });
            return message;
        };

        /**
         * Decodes a confirm_verification_code message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.confirm_verification_code
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.confirm_verification_code} confirm_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        confirm_verification_code.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a confirm_verification_code message.
         * @function verify
         * @memberof client_to_svr.confirm_verification_code
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        confirm_verification_code.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.verification_code))
                return "verification_code: string expected";
            return null;
        };

        return confirm_verification_code;
    })();

    client_to_svr.restore_passwnd = (function() {

        /**
         * Properties of a restore_passwnd.
         * @memberof client_to_svr
         * @interface Irestore_passwnd
         * @property {string} passwnd restore_passwnd passwnd
         */

        /**
         * Constructs a new restore_passwnd.
         * @memberof client_to_svr
         * @classdesc Represents a restore_passwnd.
         * @implements Irestore_passwnd
         * @constructor
         * @param {client_to_svr.Irestore_passwnd=} [properties] Properties to set
         */
        function restore_passwnd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * restore_passwnd passwnd.
         * @member {string} passwnd
         * @memberof client_to_svr.restore_passwnd
         * @instance
         */
        restore_passwnd.prototype.passwnd = "";

        /**
         * Creates a new restore_passwnd instance using the specified properties.
         * @function create
         * @memberof client_to_svr.restore_passwnd
         * @static
         * @param {client_to_svr.Irestore_passwnd=} [properties] Properties to set
         * @returns {client_to_svr.restore_passwnd} restore_passwnd instance
         */
        restore_passwnd.create = function create(properties) {
            return new restore_passwnd(properties);
        };

        /**
         * Encodes the specified restore_passwnd message. Does not implicitly {@link client_to_svr.restore_passwnd.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.restore_passwnd
         * @static
         * @param {client_to_svr.Irestore_passwnd} message restore_passwnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        restore_passwnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.passwnd);
            return writer;
        };

        /**
         * Encodes the specified restore_passwnd message, length delimited. Does not implicitly {@link client_to_svr.restore_passwnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.restore_passwnd
         * @static
         * @param {client_to_svr.Irestore_passwnd} message restore_passwnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        restore_passwnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a restore_passwnd message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.restore_passwnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.restore_passwnd} restore_passwnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        restore_passwnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.restore_passwnd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.passwnd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("passwnd"))
                throw $util.ProtocolError("missing required 'passwnd'", { instance: message });
            return message;
        };

        /**
         * Decodes a restore_passwnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.restore_passwnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.restore_passwnd} restore_passwnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        restore_passwnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a restore_passwnd message.
         * @function verify
         * @memberof client_to_svr.restore_passwnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        restore_passwnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.passwnd))
                return "passwnd: string expected";
            return null;
        };

        return restore_passwnd;
    })();

    client_to_svr.confirm_mail_verification_code = (function() {

        /**
         * Properties of a confirm_mail_verification_code.
         * @memberof client_to_svr
         * @interface Iconfirm_mail_verification_code
         * @property {string} mail confirm_mail_verification_code mail
         */

        /**
         * Constructs a new confirm_mail_verification_code.
         * @memberof client_to_svr
         * @classdesc Represents a confirm_mail_verification_code.
         * @implements Iconfirm_mail_verification_code
         * @constructor
         * @param {client_to_svr.Iconfirm_mail_verification_code=} [properties] Properties to set
         */
        function confirm_mail_verification_code(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * confirm_mail_verification_code mail.
         * @member {string} mail
         * @memberof client_to_svr.confirm_mail_verification_code
         * @instance
         */
        confirm_mail_verification_code.prototype.mail = "";

        /**
         * Creates a new confirm_mail_verification_code instance using the specified properties.
         * @function create
         * @memberof client_to_svr.confirm_mail_verification_code
         * @static
         * @param {client_to_svr.Iconfirm_mail_verification_code=} [properties] Properties to set
         * @returns {client_to_svr.confirm_mail_verification_code} confirm_mail_verification_code instance
         */
        confirm_mail_verification_code.create = function create(properties) {
            return new confirm_mail_verification_code(properties);
        };

        /**
         * Encodes the specified confirm_mail_verification_code message. Does not implicitly {@link client_to_svr.confirm_mail_verification_code.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.confirm_mail_verification_code
         * @static
         * @param {client_to_svr.Iconfirm_mail_verification_code} message confirm_mail_verification_code message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        confirm_mail_verification_code.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.mail);
            return writer;
        };

        /**
         * Encodes the specified confirm_mail_verification_code message, length delimited. Does not implicitly {@link client_to_svr.confirm_mail_verification_code.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.confirm_mail_verification_code
         * @static
         * @param {client_to_svr.Iconfirm_mail_verification_code} message confirm_mail_verification_code message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        confirm_mail_verification_code.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a confirm_mail_verification_code message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.confirm_mail_verification_code
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.confirm_mail_verification_code} confirm_mail_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        confirm_mail_verification_code.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.confirm_mail_verification_code();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mail = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mail"))
                throw $util.ProtocolError("missing required 'mail'", { instance: message });
            return message;
        };

        /**
         * Decodes a confirm_mail_verification_code message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.confirm_mail_verification_code
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.confirm_mail_verification_code} confirm_mail_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        confirm_mail_verification_code.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a confirm_mail_verification_code message.
         * @function verify
         * @memberof client_to_svr.confirm_mail_verification_code
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        confirm_mail_verification_code.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.mail))
                return "mail: string expected";
            return null;
        };

        return confirm_mail_verification_code;
    })();

    client_to_svr.confirm_phone_verification_code = (function() {

        /**
         * Properties of a confirm_phone_verification_code.
         * @memberof client_to_svr
         * @interface Iconfirm_phone_verification_code
         * @property {string} phone confirm_phone_verification_code phone
         */

        /**
         * Constructs a new confirm_phone_verification_code.
         * @memberof client_to_svr
         * @classdesc Represents a confirm_phone_verification_code.
         * @implements Iconfirm_phone_verification_code
         * @constructor
         * @param {client_to_svr.Iconfirm_phone_verification_code=} [properties] Properties to set
         */
        function confirm_phone_verification_code(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * confirm_phone_verification_code phone.
         * @member {string} phone
         * @memberof client_to_svr.confirm_phone_verification_code
         * @instance
         */
        confirm_phone_verification_code.prototype.phone = "";

        /**
         * Creates a new confirm_phone_verification_code instance using the specified properties.
         * @function create
         * @memberof client_to_svr.confirm_phone_verification_code
         * @static
         * @param {client_to_svr.Iconfirm_phone_verification_code=} [properties] Properties to set
         * @returns {client_to_svr.confirm_phone_verification_code} confirm_phone_verification_code instance
         */
        confirm_phone_verification_code.create = function create(properties) {
            return new confirm_phone_verification_code(properties);
        };

        /**
         * Encodes the specified confirm_phone_verification_code message. Does not implicitly {@link client_to_svr.confirm_phone_verification_code.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.confirm_phone_verification_code
         * @static
         * @param {client_to_svr.Iconfirm_phone_verification_code} message confirm_phone_verification_code message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        confirm_phone_verification_code.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.phone);
            return writer;
        };

        /**
         * Encodes the specified confirm_phone_verification_code message, length delimited. Does not implicitly {@link client_to_svr.confirm_phone_verification_code.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.confirm_phone_verification_code
         * @static
         * @param {client_to_svr.Iconfirm_phone_verification_code} message confirm_phone_verification_code message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        confirm_phone_verification_code.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a confirm_phone_verification_code message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.confirm_phone_verification_code
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.confirm_phone_verification_code} confirm_phone_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        confirm_phone_verification_code.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.confirm_phone_verification_code();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.phone = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("phone"))
                throw $util.ProtocolError("missing required 'phone'", { instance: message });
            return message;
        };

        /**
         * Decodes a confirm_phone_verification_code message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.confirm_phone_verification_code
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.confirm_phone_verification_code} confirm_phone_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        confirm_phone_verification_code.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a confirm_phone_verification_code message.
         * @function verify
         * @memberof client_to_svr.confirm_phone_verification_code
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        confirm_phone_verification_code.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.phone))
                return "phone: string expected";
            return null;
        };

        return confirm_phone_verification_code;
    })();

    client_to_svr.root_add_user_peas = (function() {

        /**
         * Properties of a root_add_user_peas.
         * @memberof client_to_svr
         * @interface Iroot_add_user_peas
         * @property {string} target_name root_add_user_peas target_name
         * @property {number} add_peas_num root_add_user_peas add_peas_num
         */

        /**
         * Constructs a new root_add_user_peas.
         * @memberof client_to_svr
         * @classdesc Represents a root_add_user_peas.
         * @implements Iroot_add_user_peas
         * @constructor
         * @param {client_to_svr.Iroot_add_user_peas=} [properties] Properties to set
         */
        function root_add_user_peas(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * root_add_user_peas target_name.
         * @member {string} target_name
         * @memberof client_to_svr.root_add_user_peas
         * @instance
         */
        root_add_user_peas.prototype.target_name = "";

        /**
         * root_add_user_peas add_peas_num.
         * @member {number} add_peas_num
         * @memberof client_to_svr.root_add_user_peas
         * @instance
         */
        root_add_user_peas.prototype.add_peas_num = 0;

        /**
         * Creates a new root_add_user_peas instance using the specified properties.
         * @function create
         * @memberof client_to_svr.root_add_user_peas
         * @static
         * @param {client_to_svr.Iroot_add_user_peas=} [properties] Properties to set
         * @returns {client_to_svr.root_add_user_peas} root_add_user_peas instance
         */
        root_add_user_peas.create = function create(properties) {
            return new root_add_user_peas(properties);
        };

        /**
         * Encodes the specified root_add_user_peas message. Does not implicitly {@link client_to_svr.root_add_user_peas.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.root_add_user_peas
         * @static
         * @param {client_to_svr.Iroot_add_user_peas} message root_add_user_peas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        root_add_user_peas.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.target_name);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.add_peas_num);
            return writer;
        };

        /**
         * Encodes the specified root_add_user_peas message, length delimited. Does not implicitly {@link client_to_svr.root_add_user_peas.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.root_add_user_peas
         * @static
         * @param {client_to_svr.Iroot_add_user_peas} message root_add_user_peas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        root_add_user_peas.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a root_add_user_peas message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.root_add_user_peas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.root_add_user_peas} root_add_user_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        root_add_user_peas.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.root_add_user_peas();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.target_name = reader.string();
                    break;
                case 2:
                    message.add_peas_num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("target_name"))
                throw $util.ProtocolError("missing required 'target_name'", { instance: message });
            if (!message.hasOwnProperty("add_peas_num"))
                throw $util.ProtocolError("missing required 'add_peas_num'", { instance: message });
            return message;
        };

        /**
         * Decodes a root_add_user_peas message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.root_add_user_peas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.root_add_user_peas} root_add_user_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        root_add_user_peas.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a root_add_user_peas message.
         * @function verify
         * @memberof client_to_svr.root_add_user_peas
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        root_add_user_peas.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.target_name))
                return "target_name: string expected";
            if (!$util.isInteger(message.add_peas_num))
                return "add_peas_num: integer expected";
            return null;
        };

        return root_add_user_peas;
    })();

    client_to_svr.manger_alloc_peas = (function() {

        /**
         * Properties of a manger_alloc_peas.
         * @memberof client_to_svr
         * @interface Imanger_alloc_peas
         * @property {string} target_name manger_alloc_peas target_name
         * @property {number} add_peas_num manger_alloc_peas add_peas_num
         */

        /**
         * Constructs a new manger_alloc_peas.
         * @memberof client_to_svr
         * @classdesc Represents a manger_alloc_peas.
         * @implements Imanger_alloc_peas
         * @constructor
         * @param {client_to_svr.Imanger_alloc_peas=} [properties] Properties to set
         */
        function manger_alloc_peas(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * manger_alloc_peas target_name.
         * @member {string} target_name
         * @memberof client_to_svr.manger_alloc_peas
         * @instance
         */
        manger_alloc_peas.prototype.target_name = "";

        /**
         * manger_alloc_peas add_peas_num.
         * @member {number} add_peas_num
         * @memberof client_to_svr.manger_alloc_peas
         * @instance
         */
        manger_alloc_peas.prototype.add_peas_num = 0;

        /**
         * Creates a new manger_alloc_peas instance using the specified properties.
         * @function create
         * @memberof client_to_svr.manger_alloc_peas
         * @static
         * @param {client_to_svr.Imanger_alloc_peas=} [properties] Properties to set
         * @returns {client_to_svr.manger_alloc_peas} manger_alloc_peas instance
         */
        manger_alloc_peas.create = function create(properties) {
            return new manger_alloc_peas(properties);
        };

        /**
         * Encodes the specified manger_alloc_peas message. Does not implicitly {@link client_to_svr.manger_alloc_peas.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.manger_alloc_peas
         * @static
         * @param {client_to_svr.Imanger_alloc_peas} message manger_alloc_peas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        manger_alloc_peas.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.target_name);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.add_peas_num);
            return writer;
        };

        /**
         * Encodes the specified manger_alloc_peas message, length delimited. Does not implicitly {@link client_to_svr.manger_alloc_peas.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.manger_alloc_peas
         * @static
         * @param {client_to_svr.Imanger_alloc_peas} message manger_alloc_peas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        manger_alloc_peas.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a manger_alloc_peas message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.manger_alloc_peas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.manger_alloc_peas} manger_alloc_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        manger_alloc_peas.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.manger_alloc_peas();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.target_name = reader.string();
                    break;
                case 2:
                    message.add_peas_num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("target_name"))
                throw $util.ProtocolError("missing required 'target_name'", { instance: message });
            if (!message.hasOwnProperty("add_peas_num"))
                throw $util.ProtocolError("missing required 'add_peas_num'", { instance: message });
            return message;
        };

        /**
         * Decodes a manger_alloc_peas message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.manger_alloc_peas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.manger_alloc_peas} manger_alloc_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        manger_alloc_peas.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a manger_alloc_peas message.
         * @function verify
         * @memberof client_to_svr.manger_alloc_peas
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        manger_alloc_peas.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.target_name))
                return "target_name: string expected";
            if (!$util.isInteger(message.add_peas_num))
                return "add_peas_num: integer expected";
            return null;
        };

        return manger_alloc_peas;
    })();

    client_to_svr.root_add_group_peas = (function() {

        /**
         * Properties of a root_add_group_peas.
         * @memberof client_to_svr
         * @interface Iroot_add_group_peas
         * @property {string} group root_add_group_peas group
         * @property {number} add_peas_num root_add_group_peas add_peas_num
         */

        /**
         * Constructs a new root_add_group_peas.
         * @memberof client_to_svr
         * @classdesc Represents a root_add_group_peas.
         * @implements Iroot_add_group_peas
         * @constructor
         * @param {client_to_svr.Iroot_add_group_peas=} [properties] Properties to set
         */
        function root_add_group_peas(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * root_add_group_peas group.
         * @member {string} group
         * @memberof client_to_svr.root_add_group_peas
         * @instance
         */
        root_add_group_peas.prototype.group = "";

        /**
         * root_add_group_peas add_peas_num.
         * @member {number} add_peas_num
         * @memberof client_to_svr.root_add_group_peas
         * @instance
         */
        root_add_group_peas.prototype.add_peas_num = 0;

        /**
         * Creates a new root_add_group_peas instance using the specified properties.
         * @function create
         * @memberof client_to_svr.root_add_group_peas
         * @static
         * @param {client_to_svr.Iroot_add_group_peas=} [properties] Properties to set
         * @returns {client_to_svr.root_add_group_peas} root_add_group_peas instance
         */
        root_add_group_peas.create = function create(properties) {
            return new root_add_group_peas(properties);
        };

        /**
         * Encodes the specified root_add_group_peas message. Does not implicitly {@link client_to_svr.root_add_group_peas.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.root_add_group_peas
         * @static
         * @param {client_to_svr.Iroot_add_group_peas} message root_add_group_peas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        root_add_group_peas.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.group);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.add_peas_num);
            return writer;
        };

        /**
         * Encodes the specified root_add_group_peas message, length delimited. Does not implicitly {@link client_to_svr.root_add_group_peas.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.root_add_group_peas
         * @static
         * @param {client_to_svr.Iroot_add_group_peas} message root_add_group_peas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        root_add_group_peas.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a root_add_group_peas message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.root_add_group_peas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.root_add_group_peas} root_add_group_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        root_add_group_peas.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.root_add_group_peas();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.group = reader.string();
                    break;
                case 2:
                    message.add_peas_num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("group"))
                throw $util.ProtocolError("missing required 'group'", { instance: message });
            if (!message.hasOwnProperty("add_peas_num"))
                throw $util.ProtocolError("missing required 'add_peas_num'", { instance: message });
            return message;
        };

        /**
         * Decodes a root_add_group_peas message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.root_add_group_peas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.root_add_group_peas} root_add_group_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        root_add_group_peas.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a root_add_group_peas message.
         * @function verify
         * @memberof client_to_svr.root_add_group_peas
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        root_add_group_peas.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.group))
                return "group: string expected";
            if (!$util.isInteger(message.add_peas_num))
                return "add_peas_num: integer expected";
            return null;
        };

        return root_add_group_peas;
    })();

    client_to_svr.root_add_project_peas = (function() {

        /**
         * Properties of a root_add_project_peas.
         * @memberof client_to_svr
         * @interface Iroot_add_project_peas
         * @property {string} parent root_add_project_peas parent
         * @property {string} project root_add_project_peas project
         * @property {number} add_peas_num root_add_project_peas add_peas_num
         */

        /**
         * Constructs a new root_add_project_peas.
         * @memberof client_to_svr
         * @classdesc Represents a root_add_project_peas.
         * @implements Iroot_add_project_peas
         * @constructor
         * @param {client_to_svr.Iroot_add_project_peas=} [properties] Properties to set
         */
        function root_add_project_peas(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * root_add_project_peas parent.
         * @member {string} parent
         * @memberof client_to_svr.root_add_project_peas
         * @instance
         */
        root_add_project_peas.prototype.parent = "";

        /**
         * root_add_project_peas project.
         * @member {string} project
         * @memberof client_to_svr.root_add_project_peas
         * @instance
         */
        root_add_project_peas.prototype.project = "";

        /**
         * root_add_project_peas add_peas_num.
         * @member {number} add_peas_num
         * @memberof client_to_svr.root_add_project_peas
         * @instance
         */
        root_add_project_peas.prototype.add_peas_num = 0;

        /**
         * Creates a new root_add_project_peas instance using the specified properties.
         * @function create
         * @memberof client_to_svr.root_add_project_peas
         * @static
         * @param {client_to_svr.Iroot_add_project_peas=} [properties] Properties to set
         * @returns {client_to_svr.root_add_project_peas} root_add_project_peas instance
         */
        root_add_project_peas.create = function create(properties) {
            return new root_add_project_peas(properties);
        };

        /**
         * Encodes the specified root_add_project_peas message. Does not implicitly {@link client_to_svr.root_add_project_peas.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.root_add_project_peas
         * @static
         * @param {client_to_svr.Iroot_add_project_peas} message root_add_project_peas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        root_add_project_peas.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.project);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.add_peas_num);
            return writer;
        };

        /**
         * Encodes the specified root_add_project_peas message, length delimited. Does not implicitly {@link client_to_svr.root_add_project_peas.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.root_add_project_peas
         * @static
         * @param {client_to_svr.Iroot_add_project_peas} message root_add_project_peas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        root_add_project_peas.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a root_add_project_peas message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.root_add_project_peas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.root_add_project_peas} root_add_project_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        root_add_project_peas.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.root_add_project_peas();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.parent = reader.string();
                    break;
                case 2:
                    message.project = reader.string();
                    break;
                case 3:
                    message.add_peas_num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("parent"))
                throw $util.ProtocolError("missing required 'parent'", { instance: message });
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            if (!message.hasOwnProperty("add_peas_num"))
                throw $util.ProtocolError("missing required 'add_peas_num'", { instance: message });
            return message;
        };

        /**
         * Decodes a root_add_project_peas message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.root_add_project_peas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.root_add_project_peas} root_add_project_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        root_add_project_peas.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a root_add_project_peas message.
         * @function verify
         * @memberof client_to_svr.root_add_project_peas
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        root_add_project_peas.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.parent))
                return "parent: string expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            if (!$util.isInteger(message.add_peas_num))
                return "add_peas_num: integer expected";
            return null;
        };

        return root_add_project_peas;
    })();

    client_to_svr.set_group_replace_peas = (function() {

        /**
         * Properties of a set_group_replace_peas.
         * @memberof client_to_svr
         * @interface Iset_group_replace_peas
         * @property {string} group set_group_replace_peas group
         * @property {boolean} pay_for_sd set_group_replace_peas pay_for_sd
         */

        /**
         * Constructs a new set_group_replace_peas.
         * @memberof client_to_svr
         * @classdesc Represents a set_group_replace_peas.
         * @implements Iset_group_replace_peas
         * @constructor
         * @param {client_to_svr.Iset_group_replace_peas=} [properties] Properties to set
         */
        function set_group_replace_peas(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * set_group_replace_peas group.
         * @member {string} group
         * @memberof client_to_svr.set_group_replace_peas
         * @instance
         */
        set_group_replace_peas.prototype.group = "";

        /**
         * set_group_replace_peas pay_for_sd.
         * @member {boolean} pay_for_sd
         * @memberof client_to_svr.set_group_replace_peas
         * @instance
         */
        set_group_replace_peas.prototype.pay_for_sd = false;

        /**
         * Creates a new set_group_replace_peas instance using the specified properties.
         * @function create
         * @memberof client_to_svr.set_group_replace_peas
         * @static
         * @param {client_to_svr.Iset_group_replace_peas=} [properties] Properties to set
         * @returns {client_to_svr.set_group_replace_peas} set_group_replace_peas instance
         */
        set_group_replace_peas.create = function create(properties) {
            return new set_group_replace_peas(properties);
        };

        /**
         * Encodes the specified set_group_replace_peas message. Does not implicitly {@link client_to_svr.set_group_replace_peas.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.set_group_replace_peas
         * @static
         * @param {client_to_svr.Iset_group_replace_peas} message set_group_replace_peas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        set_group_replace_peas.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.group);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.pay_for_sd);
            return writer;
        };

        /**
         * Encodes the specified set_group_replace_peas message, length delimited. Does not implicitly {@link client_to_svr.set_group_replace_peas.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.set_group_replace_peas
         * @static
         * @param {client_to_svr.Iset_group_replace_peas} message set_group_replace_peas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        set_group_replace_peas.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a set_group_replace_peas message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.set_group_replace_peas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.set_group_replace_peas} set_group_replace_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        set_group_replace_peas.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.set_group_replace_peas();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.group = reader.string();
                    break;
                case 2:
                    message.pay_for_sd = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("group"))
                throw $util.ProtocolError("missing required 'group'", { instance: message });
            if (!message.hasOwnProperty("pay_for_sd"))
                throw $util.ProtocolError("missing required 'pay_for_sd'", { instance: message });
            return message;
        };

        /**
         * Decodes a set_group_replace_peas message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.set_group_replace_peas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.set_group_replace_peas} set_group_replace_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        set_group_replace_peas.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a set_group_replace_peas message.
         * @function verify
         * @memberof client_to_svr.set_group_replace_peas
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        set_group_replace_peas.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.group))
                return "group: string expected";
            if (typeof message.pay_for_sd !== "boolean")
                return "pay_for_sd: boolean expected";
            return null;
        };

        return set_group_replace_peas;
    })();

    client_to_svr.set_project_replace_peas = (function() {

        /**
         * Properties of a set_project_replace_peas.
         * @memberof client_to_svr
         * @interface Iset_project_replace_peas
         * @property {string} project set_project_replace_peas project
         * @property {boolean} pay_for_sd set_project_replace_peas pay_for_sd
         */

        /**
         * Constructs a new set_project_replace_peas.
         * @memberof client_to_svr
         * @classdesc Represents a set_project_replace_peas.
         * @implements Iset_project_replace_peas
         * @constructor
         * @param {client_to_svr.Iset_project_replace_peas=} [properties] Properties to set
         */
        function set_project_replace_peas(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * set_project_replace_peas project.
         * @member {string} project
         * @memberof client_to_svr.set_project_replace_peas
         * @instance
         */
        set_project_replace_peas.prototype.project = "";

        /**
         * set_project_replace_peas pay_for_sd.
         * @member {boolean} pay_for_sd
         * @memberof client_to_svr.set_project_replace_peas
         * @instance
         */
        set_project_replace_peas.prototype.pay_for_sd = false;

        /**
         * Creates a new set_project_replace_peas instance using the specified properties.
         * @function create
         * @memberof client_to_svr.set_project_replace_peas
         * @static
         * @param {client_to_svr.Iset_project_replace_peas=} [properties] Properties to set
         * @returns {client_to_svr.set_project_replace_peas} set_project_replace_peas instance
         */
        set_project_replace_peas.create = function create(properties) {
            return new set_project_replace_peas(properties);
        };

        /**
         * Encodes the specified set_project_replace_peas message. Does not implicitly {@link client_to_svr.set_project_replace_peas.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.set_project_replace_peas
         * @static
         * @param {client_to_svr.Iset_project_replace_peas} message set_project_replace_peas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        set_project_replace_peas.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.project);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.pay_for_sd);
            return writer;
        };

        /**
         * Encodes the specified set_project_replace_peas message, length delimited. Does not implicitly {@link client_to_svr.set_project_replace_peas.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.set_project_replace_peas
         * @static
         * @param {client_to_svr.Iset_project_replace_peas} message set_project_replace_peas message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        set_project_replace_peas.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a set_project_replace_peas message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.set_project_replace_peas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.set_project_replace_peas} set_project_replace_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        set_project_replace_peas.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.set_project_replace_peas();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.project = reader.string();
                    break;
                case 2:
                    message.pay_for_sd = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            if (!message.hasOwnProperty("pay_for_sd"))
                throw $util.ProtocolError("missing required 'pay_for_sd'", { instance: message });
            return message;
        };

        /**
         * Decodes a set_project_replace_peas message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.set_project_replace_peas
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.set_project_replace_peas} set_project_replace_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        set_project_replace_peas.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a set_project_replace_peas message.
         * @function verify
         * @memberof client_to_svr.set_project_replace_peas
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        set_project_replace_peas.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            if (typeof message.pay_for_sd !== "boolean")
                return "pay_for_sd: boolean expected";
            return null;
        };

        return set_project_replace_peas;
    })();

    client_to_svr.editor_repository_group = (function() {

        /**
         * Properties of an editor_repository_group.
         * @memberof client_to_svr
         * @interface Ieditor_repository_group
         * @property {string} project editor_repository_group project
         * @property {string} sub_project editor_repository_group sub_project
         * @property {string} parent editor_repository_group parent
         * @property {string} name editor_repository_group name
         * @property {common.repository_type} repository_type editor_repository_group repository_type
         */

        /**
         * Constructs a new editor_repository_group.
         * @memberof client_to_svr
         * @classdesc Represents an editor_repository_group.
         * @implements Ieditor_repository_group
         * @constructor
         * @param {client_to_svr.Ieditor_repository_group=} [properties] Properties to set
         */
        function editor_repository_group(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * editor_repository_group project.
         * @member {string} project
         * @memberof client_to_svr.editor_repository_group
         * @instance
         */
        editor_repository_group.prototype.project = "";

        /**
         * editor_repository_group sub_project.
         * @member {string} sub_project
         * @memberof client_to_svr.editor_repository_group
         * @instance
         */
        editor_repository_group.prototype.sub_project = "";

        /**
         * editor_repository_group parent.
         * @member {string} parent
         * @memberof client_to_svr.editor_repository_group
         * @instance
         */
        editor_repository_group.prototype.parent = "";

        /**
         * editor_repository_group name.
         * @member {string} name
         * @memberof client_to_svr.editor_repository_group
         * @instance
         */
        editor_repository_group.prototype.name = "";

        /**
         * editor_repository_group repository_type.
         * @member {common.repository_type} repository_type
         * @memberof client_to_svr.editor_repository_group
         * @instance
         */
        editor_repository_group.prototype.repository_type = 0;

        /**
         * Creates a new editor_repository_group instance using the specified properties.
         * @function create
         * @memberof client_to_svr.editor_repository_group
         * @static
         * @param {client_to_svr.Ieditor_repository_group=} [properties] Properties to set
         * @returns {client_to_svr.editor_repository_group} editor_repository_group instance
         */
        editor_repository_group.create = function create(properties) {
            return new editor_repository_group(properties);
        };

        /**
         * Encodes the specified editor_repository_group message. Does not implicitly {@link client_to_svr.editor_repository_group.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.editor_repository_group
         * @static
         * @param {client_to_svr.Ieditor_repository_group} message editor_repository_group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        editor_repository_group.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.project);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sub_project);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.parent);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.repository_type);
            return writer;
        };

        /**
         * Encodes the specified editor_repository_group message, length delimited. Does not implicitly {@link client_to_svr.editor_repository_group.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.editor_repository_group
         * @static
         * @param {client_to_svr.Ieditor_repository_group} message editor_repository_group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        editor_repository_group.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an editor_repository_group message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.editor_repository_group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.editor_repository_group} editor_repository_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        editor_repository_group.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.editor_repository_group();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.project = reader.string();
                    break;
                case 2:
                    message.sub_project = reader.string();
                    break;
                case 3:
                    message.parent = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.repository_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            if (!message.hasOwnProperty("sub_project"))
                throw $util.ProtocolError("missing required 'sub_project'", { instance: message });
            if (!message.hasOwnProperty("parent"))
                throw $util.ProtocolError("missing required 'parent'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("repository_type"))
                throw $util.ProtocolError("missing required 'repository_type'", { instance: message });
            return message;
        };

        /**
         * Decodes an editor_repository_group message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.editor_repository_group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.editor_repository_group} editor_repository_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        editor_repository_group.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an editor_repository_group message.
         * @function verify
         * @memberof client_to_svr.editor_repository_group
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        editor_repository_group.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            if (!$util.isString(message.sub_project))
                return "sub_project: string expected";
            if (!$util.isString(message.parent))
                return "parent: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            switch (message.repository_type) {
            default:
                return "repository_type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
            return null;
        };

        return editor_repository_group;
    })();

    client_to_svr.get_project_repository = (function() {

        /**
         * Properties of a get_project_repository.
         * @memberof client_to_svr
         * @interface Iget_project_repository
         * @property {string} project get_project_repository project
         * @property {string} sub_project get_project_repository sub_project
         * @property {common.repository_type} repository_type get_project_repository repository_type
         */

        /**
         * Constructs a new get_project_repository.
         * @memberof client_to_svr
         * @classdesc Represents a get_project_repository.
         * @implements Iget_project_repository
         * @constructor
         * @param {client_to_svr.Iget_project_repository=} [properties] Properties to set
         */
        function get_project_repository(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * get_project_repository project.
         * @member {string} project
         * @memberof client_to_svr.get_project_repository
         * @instance
         */
        get_project_repository.prototype.project = "";

        /**
         * get_project_repository sub_project.
         * @member {string} sub_project
         * @memberof client_to_svr.get_project_repository
         * @instance
         */
        get_project_repository.prototype.sub_project = "";

        /**
         * get_project_repository repository_type.
         * @member {common.repository_type} repository_type
         * @memberof client_to_svr.get_project_repository
         * @instance
         */
        get_project_repository.prototype.repository_type = 0;

        /**
         * Creates a new get_project_repository instance using the specified properties.
         * @function create
         * @memberof client_to_svr.get_project_repository
         * @static
         * @param {client_to_svr.Iget_project_repository=} [properties] Properties to set
         * @returns {client_to_svr.get_project_repository} get_project_repository instance
         */
        get_project_repository.create = function create(properties) {
            return new get_project_repository(properties);
        };

        /**
         * Encodes the specified get_project_repository message. Does not implicitly {@link client_to_svr.get_project_repository.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.get_project_repository
         * @static
         * @param {client_to_svr.Iget_project_repository} message get_project_repository message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_project_repository.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.project);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sub_project);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.repository_type);
            return writer;
        };

        /**
         * Encodes the specified get_project_repository message, length delimited. Does not implicitly {@link client_to_svr.get_project_repository.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.get_project_repository
         * @static
         * @param {client_to_svr.Iget_project_repository} message get_project_repository message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        get_project_repository.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a get_project_repository message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.get_project_repository
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.get_project_repository} get_project_repository
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_project_repository.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.get_project_repository();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.project = reader.string();
                    break;
                case 2:
                    message.sub_project = reader.string();
                    break;
                case 3:
                    message.repository_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            if (!message.hasOwnProperty("sub_project"))
                throw $util.ProtocolError("missing required 'sub_project'", { instance: message });
            if (!message.hasOwnProperty("repository_type"))
                throw $util.ProtocolError("missing required 'repository_type'", { instance: message });
            return message;
        };

        /**
         * Decodes a get_project_repository message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.get_project_repository
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.get_project_repository} get_project_repository
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        get_project_repository.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a get_project_repository message.
         * @function verify
         * @memberof client_to_svr.get_project_repository
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        get_project_repository.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            if (!$util.isString(message.sub_project))
                return "sub_project: string expected";
            switch (message.repository_type) {
            default:
                return "repository_type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
            return null;
        };

        return get_project_repository;
    })();

    /**
     * client_msg_id enum.
     * @name client_to_svr.client_msg_id
     * @enum {string}
     * @property {number} user_register_id=1 user_register_id value
     * @property {number} user_login_id=2 user_login_id value
     * @property {number} client_change_pwd_id=3 client_change_pwd_id value
     * @property {number} create_project_id=4 create_project_id value
     * @property {number} add_group_into_project_id=5 add_group_into_project_id value
     * @property {number} remove_group_from_project_id=6 remove_group_from_project_id value
     * @property {number} add_user_into_project_id=7 add_user_into_project_id value
     * @property {number} remove_user_from_project_id=8 remove_user_from_project_id value
     * @property {number} create_group_id=9 create_group_id value
     * @property {number} add_user_into_group_id=10 add_user_into_group_id value
     * @property {number} remove_user_from_group_id=11 remove_user_from_group_id value
     * @property {number} set_user_project_permission_id=12 set_user_project_permission_id value
     * @property {number} set_group_project_permission_id=13 set_group_project_permission_id value
     * @property {number} get_project_member_id=14 get_project_member_id value
     * @property {number} get_group_member_id=15 get_group_member_id value
     * @property {number} get_user_project_permission_id=16 get_user_project_permission_id value
     * @property {number} get_group_project_permission_id=17 get_group_project_permission_id value
     * @property {number} get_all_project_id=18 get_all_project_id value
     * @property {number} get_all_group_id=19 get_all_group_id value
     * @property {number} get_verification_code_id=20 get_verification_code_id value
     * @property {number} restore_passwnd_id=21 restore_passwnd_id value
     * @property {number} confirm_verification_code_id=22 confirm_verification_code_id value
     * @property {number} confirm_mail_verification_code_id=23 confirm_mail_verification_code_id value
     * @property {number} confirm_phone_verification_code_id=24 confirm_phone_verification_code_id value
     * @property {number} root_add_user_peas_id=25 root_add_user_peas_id value
     * @property {number} manger_alloc_peas_id=26 manger_alloc_peas_id value
     * @property {number} root_add_group_peas_id=27 root_add_group_peas_id value
     * @property {number} root_add_project_peas_id=28 root_add_project_peas_id value
     * @property {number} set_group_replace_peas_id=29 set_group_replace_peas_id value
     * @property {number} set_project_replace_peas_id=30 set_project_replace_peas_id value
     * @property {number} add_repository_group_id=31 add_repository_group_id value
     * @property {number} get_project_repository_id=32 get_project_repository_id value
     * @property {number} delete_repository_group_id=33 delete_repository_group_id value
     */
    client_to_svr.client_msg_id = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "user_register_id"] = 1;
        values[valuesById[2] = "user_login_id"] = 2;
        values[valuesById[3] = "client_change_pwd_id"] = 3;
        values[valuesById[4] = "create_project_id"] = 4;
        values[valuesById[5] = "add_group_into_project_id"] = 5;
        values[valuesById[6] = "remove_group_from_project_id"] = 6;
        values[valuesById[7] = "add_user_into_project_id"] = 7;
        values[valuesById[8] = "remove_user_from_project_id"] = 8;
        values[valuesById[9] = "create_group_id"] = 9;
        values[valuesById[10] = "add_user_into_group_id"] = 10;
        values[valuesById[11] = "remove_user_from_group_id"] = 11;
        values[valuesById[12] = "set_user_project_permission_id"] = 12;
        values[valuesById[13] = "set_group_project_permission_id"] = 13;
        values[valuesById[14] = "get_project_member_id"] = 14;
        values[valuesById[15] = "get_group_member_id"] = 15;
        values[valuesById[16] = "get_user_project_permission_id"] = 16;
        values[valuesById[17] = "get_group_project_permission_id"] = 17;
        values[valuesById[18] = "get_all_project_id"] = 18;
        values[valuesById[19] = "get_all_group_id"] = 19;
        values[valuesById[20] = "get_verification_code_id"] = 20;
        values[valuesById[21] = "restore_passwnd_id"] = 21;
        values[valuesById[22] = "confirm_verification_code_id"] = 22;
        values[valuesById[23] = "confirm_mail_verification_code_id"] = 23;
        values[valuesById[24] = "confirm_phone_verification_code_id"] = 24;
        values[valuesById[25] = "root_add_user_peas_id"] = 25;
        values[valuesById[26] = "manger_alloc_peas_id"] = 26;
        values[valuesById[27] = "root_add_group_peas_id"] = 27;
        values[valuesById[28] = "root_add_project_peas_id"] = 28;
        values[valuesById[29] = "set_group_replace_peas_id"] = 29;
        values[valuesById[30] = "set_project_replace_peas_id"] = 30;
        values[valuesById[31] = "add_repository_group_id"] = 31;
        values[valuesById[32] = "get_project_repository_id"] = 32;
        values[valuesById[33] = "delete_repository_group_id"] = 33;
        return values;
    })();

    client_to_svr.client_msg = (function() {

        /**
         * Properties of a client_msg.
         * @memberof client_to_svr
         * @interface Iclient_msg
         * @property {client_to_svr.client_msg_id} _id client_msg _id
         * @property {client_to_svr.Iregister_info|null} [_register_info] client_msg _register_info
         * @property {client_to_svr.Iuser_login_info|null} [_user_login_info] client_msg _user_login_info
         * @property {client_to_svr.Iclient_change_pwd|null} [_client_change_pwd] client_msg _client_change_pwd
         * @property {client_to_svr.Icreate_project|null} [_create_project] client_msg _create_project
         * @property {client_to_svr.Iadd_group_into_project|null} [_add_group_into_project] client_msg _add_group_into_project
         * @property {client_to_svr.Iremove_group_from_project|null} [_remove_group_from_project] client_msg _remove_group_from_project
         * @property {client_to_svr.Iadd_user_into_project|null} [_add_user_into_project] client_msg _add_user_into_project
         * @property {client_to_svr.Iremove_user_from_project|null} [_remove_user_from_project] client_msg _remove_user_from_project
         * @property {client_to_svr.Icreate_group|null} [_create_group] client_msg _create_group
         * @property {client_to_svr.Iadd_user_into_group|null} [_add_user_into_group] client_msg _add_user_into_group
         * @property {client_to_svr.Iremove_user_from_group|null} [_remove_user_from_group] client_msg _remove_user_from_group
         * @property {client_to_svr.Iset_user_project_permission|null} [_set_user_project_permission] client_msg _set_user_project_permission
         * @property {client_to_svr.Iset_group_project_permission|null} [_set_group_project_permission] client_msg _set_group_project_permission
         * @property {client_to_svr.Iget_project_member|null} [_get_project_member] client_msg _get_project_member
         * @property {client_to_svr.Iget_group_member|null} [_get_group_member] client_msg _get_group_member
         * @property {client_to_svr.Iget_user_project_permission|null} [_get_user_project_permission] client_msg _get_user_project_permission
         * @property {client_to_svr.Iget_group_project_permission|null} [_get_group_project_permission] client_msg _get_group_project_permission
         * @property {client_to_svr.Iget_all_project|null} [_get_all_project] client_msg _get_all_project
         * @property {client_to_svr.Iget_all_group|null} [_get_all_group] client_msg _get_all_group
         * @property {client_to_svr.Iget_verification_code|null} [_get_verification_code] client_msg _get_verification_code
         * @property {client_to_svr.Irestore_passwnd|null} [_restore_passwnd] client_msg _restore_passwnd
         * @property {client_to_svr.Iconfirm_verification_code|null} [_confirm_verification_code] client_msg _confirm_verification_code
         * @property {client_to_svr.Iconfirm_mail_verification_code|null} [_confirm_mail_verification_code] client_msg _confirm_mail_verification_code
         * @property {client_to_svr.Iconfirm_phone_verification_code|null} [_confirm_phone_verification_code] client_msg _confirm_phone_verification_code
         * @property {client_to_svr.Iroot_add_user_peas|null} [_root_add_user_peas] client_msg _root_add_user_peas
         * @property {client_to_svr.Imanger_alloc_peas|null} [_manger_alloc_peas] client_msg _manger_alloc_peas
         * @property {client_to_svr.Iroot_add_group_peas|null} [_root_add_group_peas] client_msg _root_add_group_peas
         * @property {client_to_svr.Iroot_add_project_peas|null} [_root_add_project_peas] client_msg _root_add_project_peas
         * @property {client_to_svr.Iset_group_replace_peas|null} [_set_group_replace_peas] client_msg _set_group_replace_peas
         * @property {client_to_svr.Iset_project_replace_peas|null} [_set_project_replace_peas] client_msg _set_project_replace_peas
         * @property {client_to_svr.Ieditor_repository_group|null} [_add_repository_group] client_msg _add_repository_group
         * @property {client_to_svr.Iget_project_repository|null} [_get_project_repository] client_msg _get_project_repository
         * @property {client_to_svr.Ieditor_repository_group|null} [_delete_repository_group] client_msg _delete_repository_group
         */

        /**
         * Constructs a new client_msg.
         * @memberof client_to_svr
         * @classdesc Represents a client_msg.
         * @implements Iclient_msg
         * @constructor
         * @param {client_to_svr.Iclient_msg=} [properties] Properties to set
         */
        function client_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * client_msg _id.
         * @member {client_to_svr.client_msg_id} _id
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._id = 1;

        /**
         * client_msg _register_info.
         * @member {client_to_svr.Iregister_info|null|undefined} _register_info
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._register_info = null;

        /**
         * client_msg _user_login_info.
         * @member {client_to_svr.Iuser_login_info|null|undefined} _user_login_info
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._user_login_info = null;

        /**
         * client_msg _client_change_pwd.
         * @member {client_to_svr.Iclient_change_pwd|null|undefined} _client_change_pwd
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._client_change_pwd = null;

        /**
         * client_msg _create_project.
         * @member {client_to_svr.Icreate_project|null|undefined} _create_project
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._create_project = null;

        /**
         * client_msg _add_group_into_project.
         * @member {client_to_svr.Iadd_group_into_project|null|undefined} _add_group_into_project
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._add_group_into_project = null;

        /**
         * client_msg _remove_group_from_project.
         * @member {client_to_svr.Iremove_group_from_project|null|undefined} _remove_group_from_project
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._remove_group_from_project = null;

        /**
         * client_msg _add_user_into_project.
         * @member {client_to_svr.Iadd_user_into_project|null|undefined} _add_user_into_project
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._add_user_into_project = null;

        /**
         * client_msg _remove_user_from_project.
         * @member {client_to_svr.Iremove_user_from_project|null|undefined} _remove_user_from_project
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._remove_user_from_project = null;

        /**
         * client_msg _create_group.
         * @member {client_to_svr.Icreate_group|null|undefined} _create_group
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._create_group = null;

        /**
         * client_msg _add_user_into_group.
         * @member {client_to_svr.Iadd_user_into_group|null|undefined} _add_user_into_group
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._add_user_into_group = null;

        /**
         * client_msg _remove_user_from_group.
         * @member {client_to_svr.Iremove_user_from_group|null|undefined} _remove_user_from_group
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._remove_user_from_group = null;

        /**
         * client_msg _set_user_project_permission.
         * @member {client_to_svr.Iset_user_project_permission|null|undefined} _set_user_project_permission
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._set_user_project_permission = null;

        /**
         * client_msg _set_group_project_permission.
         * @member {client_to_svr.Iset_group_project_permission|null|undefined} _set_group_project_permission
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._set_group_project_permission = null;

        /**
         * client_msg _get_project_member.
         * @member {client_to_svr.Iget_project_member|null|undefined} _get_project_member
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._get_project_member = null;

        /**
         * client_msg _get_group_member.
         * @member {client_to_svr.Iget_group_member|null|undefined} _get_group_member
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._get_group_member = null;

        /**
         * client_msg _get_user_project_permission.
         * @member {client_to_svr.Iget_user_project_permission|null|undefined} _get_user_project_permission
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._get_user_project_permission = null;

        /**
         * client_msg _get_group_project_permission.
         * @member {client_to_svr.Iget_group_project_permission|null|undefined} _get_group_project_permission
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._get_group_project_permission = null;

        /**
         * client_msg _get_all_project.
         * @member {client_to_svr.Iget_all_project|null|undefined} _get_all_project
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._get_all_project = null;

        /**
         * client_msg _get_all_group.
         * @member {client_to_svr.Iget_all_group|null|undefined} _get_all_group
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._get_all_group = null;

        /**
         * client_msg _get_verification_code.
         * @member {client_to_svr.Iget_verification_code|null|undefined} _get_verification_code
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._get_verification_code = null;

        /**
         * client_msg _restore_passwnd.
         * @member {client_to_svr.Irestore_passwnd|null|undefined} _restore_passwnd
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._restore_passwnd = null;

        /**
         * client_msg _confirm_verification_code.
         * @member {client_to_svr.Iconfirm_verification_code|null|undefined} _confirm_verification_code
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._confirm_verification_code = null;

        /**
         * client_msg _confirm_mail_verification_code.
         * @member {client_to_svr.Iconfirm_mail_verification_code|null|undefined} _confirm_mail_verification_code
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._confirm_mail_verification_code = null;

        /**
         * client_msg _confirm_phone_verification_code.
         * @member {client_to_svr.Iconfirm_phone_verification_code|null|undefined} _confirm_phone_verification_code
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._confirm_phone_verification_code = null;

        /**
         * client_msg _root_add_user_peas.
         * @member {client_to_svr.Iroot_add_user_peas|null|undefined} _root_add_user_peas
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._root_add_user_peas = null;

        /**
         * client_msg _manger_alloc_peas.
         * @member {client_to_svr.Imanger_alloc_peas|null|undefined} _manger_alloc_peas
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._manger_alloc_peas = null;

        /**
         * client_msg _root_add_group_peas.
         * @member {client_to_svr.Iroot_add_group_peas|null|undefined} _root_add_group_peas
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._root_add_group_peas = null;

        /**
         * client_msg _root_add_project_peas.
         * @member {client_to_svr.Iroot_add_project_peas|null|undefined} _root_add_project_peas
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._root_add_project_peas = null;

        /**
         * client_msg _set_group_replace_peas.
         * @member {client_to_svr.Iset_group_replace_peas|null|undefined} _set_group_replace_peas
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._set_group_replace_peas = null;

        /**
         * client_msg _set_project_replace_peas.
         * @member {client_to_svr.Iset_project_replace_peas|null|undefined} _set_project_replace_peas
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._set_project_replace_peas = null;

        /**
         * client_msg _add_repository_group.
         * @member {client_to_svr.Ieditor_repository_group|null|undefined} _add_repository_group
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._add_repository_group = null;

        /**
         * client_msg _get_project_repository.
         * @member {client_to_svr.Iget_project_repository|null|undefined} _get_project_repository
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._get_project_repository = null;

        /**
         * client_msg _delete_repository_group.
         * @member {client_to_svr.Ieditor_repository_group|null|undefined} _delete_repository_group
         * @memberof client_to_svr.client_msg
         * @instance
         */
        client_msg.prototype._delete_repository_group = null;

        /**
         * Creates a new client_msg instance using the specified properties.
         * @function create
         * @memberof client_to_svr.client_msg
         * @static
         * @param {client_to_svr.Iclient_msg=} [properties] Properties to set
         * @returns {client_to_svr.client_msg} client_msg instance
         */
        client_msg.create = function create(properties) {
            return new client_msg(properties);
        };

        /**
         * Encodes the specified client_msg message. Does not implicitly {@link client_to_svr.client_msg.verify|verify} messages.
         * @function encode
         * @memberof client_to_svr.client_msg
         * @static
         * @param {client_to_svr.Iclient_msg} message client_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        client_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message._id);
            if (message._register_info != null && message.hasOwnProperty("_register_info"))
                $root.client_to_svr.register_info.encode(message._register_info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message._user_login_info != null && message.hasOwnProperty("_user_login_info"))
                $root.client_to_svr.user_login_info.encode(message._user_login_info, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message._client_change_pwd != null && message.hasOwnProperty("_client_change_pwd"))
                $root.client_to_svr.client_change_pwd.encode(message._client_change_pwd, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message._create_project != null && message.hasOwnProperty("_create_project"))
                $root.client_to_svr.create_project.encode(message._create_project, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message._add_group_into_project != null && message.hasOwnProperty("_add_group_into_project"))
                $root.client_to_svr.add_group_into_project.encode(message._add_group_into_project, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message._remove_group_from_project != null && message.hasOwnProperty("_remove_group_from_project"))
                $root.client_to_svr.remove_group_from_project.encode(message._remove_group_from_project, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message._add_user_into_project != null && message.hasOwnProperty("_add_user_into_project"))
                $root.client_to_svr.add_user_into_project.encode(message._add_user_into_project, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message._remove_user_from_project != null && message.hasOwnProperty("_remove_user_from_project"))
                $root.client_to_svr.remove_user_from_project.encode(message._remove_user_from_project, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message._create_group != null && message.hasOwnProperty("_create_group"))
                $root.client_to_svr.create_group.encode(message._create_group, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message._add_user_into_group != null && message.hasOwnProperty("_add_user_into_group"))
                $root.client_to_svr.add_user_into_group.encode(message._add_user_into_group, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message._remove_user_from_group != null && message.hasOwnProperty("_remove_user_from_group"))
                $root.client_to_svr.remove_user_from_group.encode(message._remove_user_from_group, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message._set_user_project_permission != null && message.hasOwnProperty("_set_user_project_permission"))
                $root.client_to_svr.set_user_project_permission.encode(message._set_user_project_permission, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message._set_group_project_permission != null && message.hasOwnProperty("_set_group_project_permission"))
                $root.client_to_svr.set_group_project_permission.encode(message._set_group_project_permission, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message._get_project_member != null && message.hasOwnProperty("_get_project_member"))
                $root.client_to_svr.get_project_member.encode(message._get_project_member, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message._get_group_member != null && message.hasOwnProperty("_get_group_member"))
                $root.client_to_svr.get_group_member.encode(message._get_group_member, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message._get_user_project_permission != null && message.hasOwnProperty("_get_user_project_permission"))
                $root.client_to_svr.get_user_project_permission.encode(message._get_user_project_permission, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message._get_group_project_permission != null && message.hasOwnProperty("_get_group_project_permission"))
                $root.client_to_svr.get_group_project_permission.encode(message._get_group_project_permission, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message._get_all_project != null && message.hasOwnProperty("_get_all_project"))
                $root.client_to_svr.get_all_project.encode(message._get_all_project, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message._get_all_group != null && message.hasOwnProperty("_get_all_group"))
                $root.client_to_svr.get_all_group.encode(message._get_all_group, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message._get_verification_code != null && message.hasOwnProperty("_get_verification_code"))
                $root.client_to_svr.get_verification_code.encode(message._get_verification_code, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message._restore_passwnd != null && message.hasOwnProperty("_restore_passwnd"))
                $root.client_to_svr.restore_passwnd.encode(message._restore_passwnd, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message._confirm_verification_code != null && message.hasOwnProperty("_confirm_verification_code"))
                $root.client_to_svr.confirm_verification_code.encode(message._confirm_verification_code, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message._confirm_mail_verification_code != null && message.hasOwnProperty("_confirm_mail_verification_code"))
                $root.client_to_svr.confirm_mail_verification_code.encode(message._confirm_mail_verification_code, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message._confirm_phone_verification_code != null && message.hasOwnProperty("_confirm_phone_verification_code"))
                $root.client_to_svr.confirm_phone_verification_code.encode(message._confirm_phone_verification_code, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message._root_add_user_peas != null && message.hasOwnProperty("_root_add_user_peas"))
                $root.client_to_svr.root_add_user_peas.encode(message._root_add_user_peas, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            if (message._manger_alloc_peas != null && message.hasOwnProperty("_manger_alloc_peas"))
                $root.client_to_svr.manger_alloc_peas.encode(message._manger_alloc_peas, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            if (message._root_add_group_peas != null && message.hasOwnProperty("_root_add_group_peas"))
                $root.client_to_svr.root_add_group_peas.encode(message._root_add_group_peas, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
            if (message._root_add_project_peas != null && message.hasOwnProperty("_root_add_project_peas"))
                $root.client_to_svr.root_add_project_peas.encode(message._root_add_project_peas, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
            if (message._set_group_replace_peas != null && message.hasOwnProperty("_set_group_replace_peas"))
                $root.client_to_svr.set_group_replace_peas.encode(message._set_group_replace_peas, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
            if (message._set_project_replace_peas != null && message.hasOwnProperty("_set_project_replace_peas"))
                $root.client_to_svr.set_project_replace_peas.encode(message._set_project_replace_peas, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
            if (message._add_repository_group != null && message.hasOwnProperty("_add_repository_group"))
                $root.client_to_svr.editor_repository_group.encode(message._add_repository_group, writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
            if (message._get_project_repository != null && message.hasOwnProperty("_get_project_repository"))
                $root.client_to_svr.get_project_repository.encode(message._get_project_repository, writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();
            if (message._delete_repository_group != null && message.hasOwnProperty("_delete_repository_group"))
                $root.client_to_svr.editor_repository_group.encode(message._delete_repository_group, writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified client_msg message, length delimited. Does not implicitly {@link client_to_svr.client_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof client_to_svr.client_msg
         * @static
         * @param {client_to_svr.Iclient_msg} message client_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        client_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a client_msg message from the specified reader or buffer.
         * @function decode
         * @memberof client_to_svr.client_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {client_to_svr.client_msg} client_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        client_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.client_to_svr.client_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message._id = reader.int32();
                    break;
                case 2:
                    message._register_info = $root.client_to_svr.register_info.decode(reader, reader.uint32());
                    break;
                case 3:
                    message._user_login_info = $root.client_to_svr.user_login_info.decode(reader, reader.uint32());
                    break;
                case 4:
                    message._client_change_pwd = $root.client_to_svr.client_change_pwd.decode(reader, reader.uint32());
                    break;
                case 5:
                    message._create_project = $root.client_to_svr.create_project.decode(reader, reader.uint32());
                    break;
                case 6:
                    message._add_group_into_project = $root.client_to_svr.add_group_into_project.decode(reader, reader.uint32());
                    break;
                case 7:
                    message._remove_group_from_project = $root.client_to_svr.remove_group_from_project.decode(reader, reader.uint32());
                    break;
                case 8:
                    message._add_user_into_project = $root.client_to_svr.add_user_into_project.decode(reader, reader.uint32());
                    break;
                case 9:
                    message._remove_user_from_project = $root.client_to_svr.remove_user_from_project.decode(reader, reader.uint32());
                    break;
                case 10:
                    message._create_group = $root.client_to_svr.create_group.decode(reader, reader.uint32());
                    break;
                case 11:
                    message._add_user_into_group = $root.client_to_svr.add_user_into_group.decode(reader, reader.uint32());
                    break;
                case 12:
                    message._remove_user_from_group = $root.client_to_svr.remove_user_from_group.decode(reader, reader.uint32());
                    break;
                case 13:
                    message._set_user_project_permission = $root.client_to_svr.set_user_project_permission.decode(reader, reader.uint32());
                    break;
                case 14:
                    message._set_group_project_permission = $root.client_to_svr.set_group_project_permission.decode(reader, reader.uint32());
                    break;
                case 15:
                    message._get_project_member = $root.client_to_svr.get_project_member.decode(reader, reader.uint32());
                    break;
                case 16:
                    message._get_group_member = $root.client_to_svr.get_group_member.decode(reader, reader.uint32());
                    break;
                case 17:
                    message._get_user_project_permission = $root.client_to_svr.get_user_project_permission.decode(reader, reader.uint32());
                    break;
                case 18:
                    message._get_group_project_permission = $root.client_to_svr.get_group_project_permission.decode(reader, reader.uint32());
                    break;
                case 19:
                    message._get_all_project = $root.client_to_svr.get_all_project.decode(reader, reader.uint32());
                    break;
                case 20:
                    message._get_all_group = $root.client_to_svr.get_all_group.decode(reader, reader.uint32());
                    break;
                case 21:
                    message._get_verification_code = $root.client_to_svr.get_verification_code.decode(reader, reader.uint32());
                    break;
                case 22:
                    message._restore_passwnd = $root.client_to_svr.restore_passwnd.decode(reader, reader.uint32());
                    break;
                case 23:
                    message._confirm_verification_code = $root.client_to_svr.confirm_verification_code.decode(reader, reader.uint32());
                    break;
                case 24:
                    message._confirm_mail_verification_code = $root.client_to_svr.confirm_mail_verification_code.decode(reader, reader.uint32());
                    break;
                case 25:
                    message._confirm_phone_verification_code = $root.client_to_svr.confirm_phone_verification_code.decode(reader, reader.uint32());
                    break;
                case 26:
                    message._root_add_user_peas = $root.client_to_svr.root_add_user_peas.decode(reader, reader.uint32());
                    break;
                case 27:
                    message._manger_alloc_peas = $root.client_to_svr.manger_alloc_peas.decode(reader, reader.uint32());
                    break;
                case 28:
                    message._root_add_group_peas = $root.client_to_svr.root_add_group_peas.decode(reader, reader.uint32());
                    break;
                case 29:
                    message._root_add_project_peas = $root.client_to_svr.root_add_project_peas.decode(reader, reader.uint32());
                    break;
                case 30:
                    message._set_group_replace_peas = $root.client_to_svr.set_group_replace_peas.decode(reader, reader.uint32());
                    break;
                case 31:
                    message._set_project_replace_peas = $root.client_to_svr.set_project_replace_peas.decode(reader, reader.uint32());
                    break;
                case 32:
                    message._add_repository_group = $root.client_to_svr.editor_repository_group.decode(reader, reader.uint32());
                    break;
                case 33:
                    message._get_project_repository = $root.client_to_svr.get_project_repository.decode(reader, reader.uint32());
                    break;
                case 34:
                    message._delete_repository_group = $root.client_to_svr.editor_repository_group.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("_id"))
                throw $util.ProtocolError("missing required '_id'", { instance: message });
            return message;
        };

        /**
         * Decodes a client_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof client_to_svr.client_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {client_to_svr.client_msg} client_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        client_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a client_msg message.
         * @function verify
         * @memberof client_to_svr.client_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        client_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message._id) {
            default:
                return "_id: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
                break;
            }
            if (message._register_info != null && message.hasOwnProperty("_register_info")) {
                var error = $root.client_to_svr.register_info.verify(message._register_info);
                if (error)
                    return "_register_info." + error;
            }
            if (message._user_login_info != null && message.hasOwnProperty("_user_login_info")) {
                var error = $root.client_to_svr.user_login_info.verify(message._user_login_info);
                if (error)
                    return "_user_login_info." + error;
            }
            if (message._client_change_pwd != null && message.hasOwnProperty("_client_change_pwd")) {
                var error = $root.client_to_svr.client_change_pwd.verify(message._client_change_pwd);
                if (error)
                    return "_client_change_pwd." + error;
            }
            if (message._create_project != null && message.hasOwnProperty("_create_project")) {
                var error = $root.client_to_svr.create_project.verify(message._create_project);
                if (error)
                    return "_create_project." + error;
            }
            if (message._add_group_into_project != null && message.hasOwnProperty("_add_group_into_project")) {
                var error = $root.client_to_svr.add_group_into_project.verify(message._add_group_into_project);
                if (error)
                    return "_add_group_into_project." + error;
            }
            if (message._remove_group_from_project != null && message.hasOwnProperty("_remove_group_from_project")) {
                var error = $root.client_to_svr.remove_group_from_project.verify(message._remove_group_from_project);
                if (error)
                    return "_remove_group_from_project." + error;
            }
            if (message._add_user_into_project != null && message.hasOwnProperty("_add_user_into_project")) {
                var error = $root.client_to_svr.add_user_into_project.verify(message._add_user_into_project);
                if (error)
                    return "_add_user_into_project." + error;
            }
            if (message._remove_user_from_project != null && message.hasOwnProperty("_remove_user_from_project")) {
                var error = $root.client_to_svr.remove_user_from_project.verify(message._remove_user_from_project);
                if (error)
                    return "_remove_user_from_project." + error;
            }
            if (message._create_group != null && message.hasOwnProperty("_create_group")) {
                var error = $root.client_to_svr.create_group.verify(message._create_group);
                if (error)
                    return "_create_group." + error;
            }
            if (message._add_user_into_group != null && message.hasOwnProperty("_add_user_into_group")) {
                var error = $root.client_to_svr.add_user_into_group.verify(message._add_user_into_group);
                if (error)
                    return "_add_user_into_group." + error;
            }
            if (message._remove_user_from_group != null && message.hasOwnProperty("_remove_user_from_group")) {
                var error = $root.client_to_svr.remove_user_from_group.verify(message._remove_user_from_group);
                if (error)
                    return "_remove_user_from_group." + error;
            }
            if (message._set_user_project_permission != null && message.hasOwnProperty("_set_user_project_permission")) {
                var error = $root.client_to_svr.set_user_project_permission.verify(message._set_user_project_permission);
                if (error)
                    return "_set_user_project_permission." + error;
            }
            if (message._set_group_project_permission != null && message.hasOwnProperty("_set_group_project_permission")) {
                var error = $root.client_to_svr.set_group_project_permission.verify(message._set_group_project_permission);
                if (error)
                    return "_set_group_project_permission." + error;
            }
            if (message._get_project_member != null && message.hasOwnProperty("_get_project_member")) {
                var error = $root.client_to_svr.get_project_member.verify(message._get_project_member);
                if (error)
                    return "_get_project_member." + error;
            }
            if (message._get_group_member != null && message.hasOwnProperty("_get_group_member")) {
                var error = $root.client_to_svr.get_group_member.verify(message._get_group_member);
                if (error)
                    return "_get_group_member." + error;
            }
            if (message._get_user_project_permission != null && message.hasOwnProperty("_get_user_project_permission")) {
                var error = $root.client_to_svr.get_user_project_permission.verify(message._get_user_project_permission);
                if (error)
                    return "_get_user_project_permission." + error;
            }
            if (message._get_group_project_permission != null && message.hasOwnProperty("_get_group_project_permission")) {
                var error = $root.client_to_svr.get_group_project_permission.verify(message._get_group_project_permission);
                if (error)
                    return "_get_group_project_permission." + error;
            }
            if (message._get_all_project != null && message.hasOwnProperty("_get_all_project")) {
                var error = $root.client_to_svr.get_all_project.verify(message._get_all_project);
                if (error)
                    return "_get_all_project." + error;
            }
            if (message._get_all_group != null && message.hasOwnProperty("_get_all_group")) {
                var error = $root.client_to_svr.get_all_group.verify(message._get_all_group);
                if (error)
                    return "_get_all_group." + error;
            }
            if (message._get_verification_code != null && message.hasOwnProperty("_get_verification_code")) {
                var error = $root.client_to_svr.get_verification_code.verify(message._get_verification_code);
                if (error)
                    return "_get_verification_code." + error;
            }
            if (message._restore_passwnd != null && message.hasOwnProperty("_restore_passwnd")) {
                var error = $root.client_to_svr.restore_passwnd.verify(message._restore_passwnd);
                if (error)
                    return "_restore_passwnd." + error;
            }
            if (message._confirm_verification_code != null && message.hasOwnProperty("_confirm_verification_code")) {
                var error = $root.client_to_svr.confirm_verification_code.verify(message._confirm_verification_code);
                if (error)
                    return "_confirm_verification_code." + error;
            }
            if (message._confirm_mail_verification_code != null && message.hasOwnProperty("_confirm_mail_verification_code")) {
                var error = $root.client_to_svr.confirm_mail_verification_code.verify(message._confirm_mail_verification_code);
                if (error)
                    return "_confirm_mail_verification_code." + error;
            }
            if (message._confirm_phone_verification_code != null && message.hasOwnProperty("_confirm_phone_verification_code")) {
                var error = $root.client_to_svr.confirm_phone_verification_code.verify(message._confirm_phone_verification_code);
                if (error)
                    return "_confirm_phone_verification_code." + error;
            }
            if (message._root_add_user_peas != null && message.hasOwnProperty("_root_add_user_peas")) {
                var error = $root.client_to_svr.root_add_user_peas.verify(message._root_add_user_peas);
                if (error)
                    return "_root_add_user_peas." + error;
            }
            if (message._manger_alloc_peas != null && message.hasOwnProperty("_manger_alloc_peas")) {
                var error = $root.client_to_svr.manger_alloc_peas.verify(message._manger_alloc_peas);
                if (error)
                    return "_manger_alloc_peas." + error;
            }
            if (message._root_add_group_peas != null && message.hasOwnProperty("_root_add_group_peas")) {
                var error = $root.client_to_svr.root_add_group_peas.verify(message._root_add_group_peas);
                if (error)
                    return "_root_add_group_peas." + error;
            }
            if (message._root_add_project_peas != null && message.hasOwnProperty("_root_add_project_peas")) {
                var error = $root.client_to_svr.root_add_project_peas.verify(message._root_add_project_peas);
                if (error)
                    return "_root_add_project_peas." + error;
            }
            if (message._set_group_replace_peas != null && message.hasOwnProperty("_set_group_replace_peas")) {
                var error = $root.client_to_svr.set_group_replace_peas.verify(message._set_group_replace_peas);
                if (error)
                    return "_set_group_replace_peas." + error;
            }
            if (message._set_project_replace_peas != null && message.hasOwnProperty("_set_project_replace_peas")) {
                var error = $root.client_to_svr.set_project_replace_peas.verify(message._set_project_replace_peas);
                if (error)
                    return "_set_project_replace_peas." + error;
            }
            if (message._add_repository_group != null && message.hasOwnProperty("_add_repository_group")) {
                var error = $root.client_to_svr.editor_repository_group.verify(message._add_repository_group);
                if (error)
                    return "_add_repository_group." + error;
            }
            if (message._get_project_repository != null && message.hasOwnProperty("_get_project_repository")) {
                var error = $root.client_to_svr.get_project_repository.verify(message._get_project_repository);
                if (error)
                    return "_get_project_repository." + error;
            }
            if (message._delete_repository_group != null && message.hasOwnProperty("_delete_repository_group")) {
                var error = $root.client_to_svr.editor_repository_group.verify(message._delete_repository_group);
                if (error)
                    return "_delete_repository_group." + error;
            }
            return null;
        };

        return client_msg;
    })();

    return client_to_svr;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    /**
     * permission_type enum.
     * @name common.permission_type
     * @enum {string}
     * @property {number} root=-1 root value
     * @property {number} manage=0 manage value
     * @property {number} read=1 read value
     * @property {number} upload=2 upload value
     * @property {number} modify=3 modify value
     * @property {number} delete=4 delete value
     * @property {number} render=5 render value
     * @property {number} all_look=6 all_look value
     * @property {number} all_project_remove=7 all_project_remove value
     * @property {number} all_project_modify=8 all_project_modify value
     * @property {number} all_project_GM=9 all_project_GM value
     * @property {number} subitem_look=10 subitem_look value
     * @property {number} subitem_modify=11 subitem_modify value
     * @property {number} common_project_look=12 common_project_look value
     * @property {number} common_project_modify=13 common_project_modify value
     * @property {number} project_add_energy=14 project_add_energy value
     * @property {number} project_remove_energy=15 project_remove_energy value
     * @property {number} project_allot_permission=16 project_allot_permission value
     * @property {number} project_mange_people=17 project_mange_people value
     * @property {number} project_transfer_permission=18 project_transfer_permission value
     * @property {number} material_lib_look=19 material_lib_look value
     * @property {number} material_lib_modify=20 material_lib_modify value
     * @property {number} material_effect_modify=21 material_effect_modify value
     * @property {number} material_fork=22 material_fork value
     * @property {number} material_collect=23 material_collect value
     * @property {number} material_3d_look=24 material_3d_look value
     * @property {number} model_look=25 model_look value
     * @property {number} model_upload=26 model_upload value
     * @property {number} content_manage=27 content_manage value
     * @property {number} normal_bake=28 normal_bake value
     * @property {number} AO_build=29 AO_build value
     * @property {number} UV_build_ID=30 UV_build_ID value
     * @property {number} map_look=31 map_look value
     * @property {number} map_lib_modify=32 map_lib_modify value
     * @property {number} texture_look=33 texture_look value
     * @property {number} texture_modify=34 texture_modify value
     * @property {number} texture_output_sbsar=35 texture_output_sbsar value
     * @property {number} texture_out_map=36 texture_out_map value
     */
    common.permission_type = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[-1] = "root"] = -1;
        values[valuesById[0] = "manage"] = 0;
        values[valuesById[1] = "read"] = 1;
        values[valuesById[2] = "upload"] = 2;
        values[valuesById[3] = "modify"] = 3;
        values[valuesById[4] = "delete"] = 4;
        values[valuesById[5] = "render"] = 5;
        values[valuesById[6] = "all_look"] = 6;
        values[valuesById[7] = "all_project_remove"] = 7;
        values[valuesById[8] = "all_project_modify"] = 8;
        values[valuesById[9] = "all_project_GM"] = 9;
        values[valuesById[10] = "subitem_look"] = 10;
        values[valuesById[11] = "subitem_modify"] = 11;
        values[valuesById[12] = "common_project_look"] = 12;
        values[valuesById[13] = "common_project_modify"] = 13;
        values[valuesById[14] = "project_add_energy"] = 14;
        values[valuesById[15] = "project_remove_energy"] = 15;
        values[valuesById[16] = "project_allot_permission"] = 16;
        values[valuesById[17] = "project_mange_people"] = 17;
        values[valuesById[18] = "project_transfer_permission"] = 18;
        values[valuesById[19] = "material_lib_look"] = 19;
        values[valuesById[20] = "material_lib_modify"] = 20;
        values[valuesById[21] = "material_effect_modify"] = 21;
        values[valuesById[22] = "material_fork"] = 22;
        values[valuesById[23] = "material_collect"] = 23;
        values[valuesById[24] = "material_3d_look"] = 24;
        values[valuesById[25] = "model_look"] = 25;
        values[valuesById[26] = "model_upload"] = 26;
        values[valuesById[27] = "content_manage"] = 27;
        values[valuesById[28] = "normal_bake"] = 28;
        values[valuesById[29] = "AO_build"] = 29;
        values[valuesById[30] = "UV_build_ID"] = 30;
        values[valuesById[31] = "map_look"] = 31;
        values[valuesById[32] = "map_lib_modify"] = 32;
        values[valuesById[33] = "texture_look"] = 33;
        values[valuesById[34] = "texture_modify"] = 34;
        values[valuesById[35] = "texture_output_sbsar"] = 35;
        values[valuesById[36] = "texture_out_map"] = 36;
        return values;
    })();

    /**
     * repository_type enum.
     * @name common.repository_type
     * @enum {string}
     * @property {number} dynaimc=0 dynaimc value
     * @property {number} substance=1 substance value
     * @property {number} model=2 model value
     * @property {number} action=3 action value
     */
    common.repository_type = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "dynaimc"] = 0;
        values[valuesById[1] = "substance"] = 1;
        values[valuesById[2] = "model"] = 2;
        values[valuesById[3] = "action"] = 3;
        return values;
    })();

    return common;
})();

$root.svr_to_client = (function() {

    /**
     * Namespace svr_to_client.
     * @exports svr_to_client
     * @namespace
     */
    var svr_to_client = {};

    /**
     * status_code enum.
     * @name svr_to_client.status_code
     * @enum {string}
     * @property {number} create_parent_project_success=-25 create_parent_project_success value
     * @property {number} create_project_dir_success=-24 create_project_dir_success value
     * @property {number} set_project_replace_peas_success=-23 set_project_replace_peas_success value
     * @property {number} set_group_replace_peas_success=-22 set_group_replace_peas_success value
     * @property {number} root_add_project_peas_success=-21 root_add_project_peas_success value
     * @property {number} root_add_group_peas_success=-20 root_add_group_peas_success value
     * @property {number} manger_alloc_peas_success=-19 manger_alloc_peas_success value
     * @property {number} root_add_user_peas_success=-18 root_add_user_peas_success value
     * @property {number} send_verification_code_phone_success=-17 send_verification_code_phone_success value
     * @property {number} send_verification_code_mail_success=-16 send_verification_code_mail_success value
     * @property {number} confirm_verification_code_success=-15 confirm_verification_code_success value
     * @property {number} restore_pwd_success=-14 restore_pwd_success value
     * @property {number} set_group_project_permission_success=-13 set_group_project_permission_success value
     * @property {number} remove_user_from_group_success=-12 remove_user_from_group_success value
     * @property {number} add_user_into_group_success=-11 add_user_into_group_success value
     * @property {number} create_group_success=-10 create_group_success value
     * @property {number} set_user_project_permission_success=-9 set_user_project_permission_success value
     * @property {number} remove_user_from_project_success=-8 remove_user_from_project_success value
     * @property {number} add_user_into_project_success=-7 add_user_into_project_success value
     * @property {number} remove_group_from_project_success=-6 remove_group_from_project_success value
     * @property {number} add_group_into_project_success=-5 add_group_into_project_success value
     * @property {number} create_project_success=-4 create_project_success value
     * @property {number} change_pwd_success=-3 change_pwd_success value
     * @property {number} user_login_success=-2 user_login_success value
     * @property {number} user_register_success=-1 user_register_success value
     * @property {number} success=0 success value
     * @property {number} pwd_is_wrong=1 pwd_is_wrong value
     * @property {number} verification_code_is_wrong=2 verification_code_is_wrong value
     * @property {number} no_authority=3 no_authority value
     * @property {number} no_permission=4 no_permission value
     * @property {number} repeated_email=5 repeated_email value
     * @property {number} repeated_name=6 repeated_name value
     * @property {number} repeated_phone=7 repeated_phone value
     * @property {number} invaild_user=8 invaild_user value
     * @property {number} unverified_verification_code=9 unverified_verification_code value
     * @property {number} verification_code_timeout=10 verification_code_timeout value
     * @property {number} wrong_email=11 wrong_email value
     * @property {number} wrong_phone=12 wrong_phone value
     * @property {number} not_root=13 not_root value
     * @property {number} render_failed=14 render_failed value
     * @property {number} invalid_resource=15 invalid_resource value
     * @property {number} not_in_target_lib=16 not_in_target_lib value
     * @property {number} pbr_check_failed=17 pbr_check_failed value
     * @property {number} prefile_check_failed=18 prefile_check_failed value
     * @property {number} repeated_sbs_file=19 repeated_sbs_file value
     * @property {number} invalid_sbs_file=20 invalid_sbs_file value
     * @property {number} invalid_parent_dir=21 invalid_parent_dir value
     * @property {number} invalid_parent=22 invalid_parent value
     * @property {number} project_is_exist=23 project_is_exist value
     */
    svr_to_client.status_code = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[-25] = "create_parent_project_success"] = -25;
        values[valuesById[-24] = "create_project_dir_success"] = -24;
        values[valuesById[-23] = "set_project_replace_peas_success"] = -23;
        values[valuesById[-22] = "set_group_replace_peas_success"] = -22;
        values[valuesById[-21] = "root_add_project_peas_success"] = -21;
        values[valuesById[-20] = "root_add_group_peas_success"] = -20;
        values[valuesById[-19] = "manger_alloc_peas_success"] = -19;
        values[valuesById[-18] = "root_add_user_peas_success"] = -18;
        values[valuesById[-17] = "send_verification_code_phone_success"] = -17;
        values[valuesById[-16] = "send_verification_code_mail_success"] = -16;
        values[valuesById[-15] = "confirm_verification_code_success"] = -15;
        values[valuesById[-14] = "restore_pwd_success"] = -14;
        values[valuesById[-13] = "set_group_project_permission_success"] = -13;
        values[valuesById[-12] = "remove_user_from_group_success"] = -12;
        values[valuesById[-11] = "add_user_into_group_success"] = -11;
        values[valuesById[-10] = "create_group_success"] = -10;
        values[valuesById[-9] = "set_user_project_permission_success"] = -9;
        values[valuesById[-8] = "remove_user_from_project_success"] = -8;
        values[valuesById[-7] = "add_user_into_project_success"] = -7;
        values[valuesById[-6] = "remove_group_from_project_success"] = -6;
        values[valuesById[-5] = "add_group_into_project_success"] = -5;
        values[valuesById[-4] = "create_project_success"] = -4;
        values[valuesById[-3] = "change_pwd_success"] = -3;
        values[valuesById[-2] = "user_login_success"] = -2;
        values[valuesById[-1] = "user_register_success"] = -1;
        values[valuesById[0] = "success"] = 0;
        values[valuesById[1] = "pwd_is_wrong"] = 1;
        values[valuesById[2] = "verification_code_is_wrong"] = 2;
        values[valuesById[3] = "no_authority"] = 3;
        values[valuesById[4] = "no_permission"] = 4;
        values[valuesById[5] = "repeated_email"] = 5;
        values[valuesById[6] = "repeated_name"] = 6;
        values[valuesById[7] = "repeated_phone"] = 7;
        values[valuesById[8] = "invaild_user"] = 8;
        values[valuesById[9] = "unverified_verification_code"] = 9;
        values[valuesById[10] = "verification_code_timeout"] = 10;
        values[valuesById[11] = "wrong_email"] = 11;
        values[valuesById[12] = "wrong_phone"] = 12;
        values[valuesById[13] = "not_root"] = 13;
        values[valuesById[14] = "render_failed"] = 14;
        values[valuesById[15] = "invalid_resource"] = 15;
        values[valuesById[16] = "not_in_target_lib"] = 16;
        values[valuesById[17] = "pbr_check_failed"] = 17;
        values[valuesById[18] = "prefile_check_failed"] = 18;
        values[valuesById[19] = "repeated_sbs_file"] = 19;
        values[valuesById[20] = "invalid_sbs_file"] = 20;
        values[valuesById[21] = "invalid_parent_dir"] = 21;
        values[valuesById[22] = "invalid_parent"] = 22;
        values[valuesById[23] = "project_is_exist"] = 23;
        return values;
    })();

    svr_to_client.status_code_ntf = (function() {

        /**
         * Properties of a status_code_ntf.
         * @memberof svr_to_client
         * @interface Istatus_code_ntf
         * @property {svr_to_client.status_code} _code status_code_ntf _code
         */

        /**
         * Constructs a new status_code_ntf.
         * @memberof svr_to_client
         * @classdesc Represents a status_code_ntf.
         * @implements Istatus_code_ntf
         * @constructor
         * @param {svr_to_client.Istatus_code_ntf=} [properties] Properties to set
         */
        function status_code_ntf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * status_code_ntf _code.
         * @member {svr_to_client.status_code} _code
         * @memberof svr_to_client.status_code_ntf
         * @instance
         */
        status_code_ntf.prototype._code = -25;

        /**
         * Creates a new status_code_ntf instance using the specified properties.
         * @function create
         * @memberof svr_to_client.status_code_ntf
         * @static
         * @param {svr_to_client.Istatus_code_ntf=} [properties] Properties to set
         * @returns {svr_to_client.status_code_ntf} status_code_ntf instance
         */
        status_code_ntf.create = function create(properties) {
            return new status_code_ntf(properties);
        };

        /**
         * Encodes the specified status_code_ntf message. Does not implicitly {@link svr_to_client.status_code_ntf.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.status_code_ntf
         * @static
         * @param {svr_to_client.Istatus_code_ntf} message status_code_ntf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        status_code_ntf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message._code);
            return writer;
        };

        /**
         * Encodes the specified status_code_ntf message, length delimited. Does not implicitly {@link svr_to_client.status_code_ntf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.status_code_ntf
         * @static
         * @param {svr_to_client.Istatus_code_ntf} message status_code_ntf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        status_code_ntf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a status_code_ntf message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.status_code_ntf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.status_code_ntf} status_code_ntf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        status_code_ntf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.status_code_ntf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message._code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("_code"))
                throw $util.ProtocolError("missing required '_code'", { instance: message });
            return message;
        };

        /**
         * Decodes a status_code_ntf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.status_code_ntf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.status_code_ntf} status_code_ntf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        status_code_ntf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a status_code_ntf message.
         * @function verify
         * @memberof svr_to_client.status_code_ntf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        status_code_ntf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message._code) {
            default:
                return "_code: enum value expected";
            case -25:
            case -24:
            case -23:
            case -22:
            case -21:
            case -20:
            case -19:
            case -18:
            case -17:
            case -16:
            case -15:
            case -14:
            case -13:
            case -12:
            case -11:
            case -10:
            case -9:
            case -8:
            case -7:
            case -6:
            case -5:
            case -4:
            case -3:
            case -2:
            case -1:
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                break;
            }
            return null;
        };

        return status_code_ntf;
    })();

    svr_to_client.user_token = (function() {

        /**
         * Properties of a user_token.
         * @memberof svr_to_client
         * @interface Iuser_token
         * @property {string} token user_token token
         */

        /**
         * Constructs a new user_token.
         * @memberof svr_to_client
         * @classdesc Represents a user_token.
         * @implements Iuser_token
         * @constructor
         * @param {svr_to_client.Iuser_token=} [properties] Properties to set
         */
        function user_token(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * user_token token.
         * @member {string} token
         * @memberof svr_to_client.user_token
         * @instance
         */
        user_token.prototype.token = "";

        /**
         * Creates a new user_token instance using the specified properties.
         * @function create
         * @memberof svr_to_client.user_token
         * @static
         * @param {svr_to_client.Iuser_token=} [properties] Properties to set
         * @returns {svr_to_client.user_token} user_token instance
         */
        user_token.create = function create(properties) {
            return new user_token(properties);
        };

        /**
         * Encodes the specified user_token message. Does not implicitly {@link svr_to_client.user_token.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.user_token
         * @static
         * @param {svr_to_client.Iuser_token} message user_token message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_token.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified user_token message, length delimited. Does not implicitly {@link svr_to_client.user_token.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.user_token
         * @static
         * @param {svr_to_client.Iuser_token} message user_token message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_token.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a user_token message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.user_token
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.user_token} user_token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_token.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.user_token();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("token"))
                throw $util.ProtocolError("missing required 'token'", { instance: message });
            return message;
        };

        /**
         * Decodes a user_token message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.user_token
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.user_token} user_token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_token.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a user_token message.
         * @function verify
         * @memberof svr_to_client.user_token
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        user_token.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.token))
                return "token: string expected";
            return null;
        };

        return user_token;
    })();

    svr_to_client.root_permission = (function() {

        /**
         * Properties of a root_permission.
         * @memberof svr_to_client
         * @interface Iroot_permission
         * @property {Array.<common.permission_type>|null} [permission_list] root_permission permission_list
         */

        /**
         * Constructs a new root_permission.
         * @memberof svr_to_client
         * @classdesc Represents a root_permission.
         * @implements Iroot_permission
         * @constructor
         * @param {svr_to_client.Iroot_permission=} [properties] Properties to set
         */
        function root_permission(properties) {
            this.permission_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * root_permission permission_list.
         * @member {Array.<common.permission_type>} permission_list
         * @memberof svr_to_client.root_permission
         * @instance
         */
        root_permission.prototype.permission_list = $util.emptyArray;

        /**
         * Creates a new root_permission instance using the specified properties.
         * @function create
         * @memberof svr_to_client.root_permission
         * @static
         * @param {svr_to_client.Iroot_permission=} [properties] Properties to set
         * @returns {svr_to_client.root_permission} root_permission instance
         */
        root_permission.create = function create(properties) {
            return new root_permission(properties);
        };

        /**
         * Encodes the specified root_permission message. Does not implicitly {@link svr_to_client.root_permission.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.root_permission
         * @static
         * @param {svr_to_client.Iroot_permission} message root_permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        root_permission.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.permission_list != null && message.permission_list.length)
                for (var i = 0; i < message.permission_list.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.permission_list[i]);
            return writer;
        };

        /**
         * Encodes the specified root_permission message, length delimited. Does not implicitly {@link svr_to_client.root_permission.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.root_permission
         * @static
         * @param {svr_to_client.Iroot_permission} message root_permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        root_permission.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a root_permission message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.root_permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.root_permission} root_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        root_permission.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.root_permission();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.permission_list && message.permission_list.length))
                        message.permission_list = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.permission_list.push(reader.int32());
                    } else
                        message.permission_list.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a root_permission message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.root_permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.root_permission} root_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        root_permission.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a root_permission message.
         * @function verify
         * @memberof svr_to_client.root_permission
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        root_permission.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.permission_list != null && message.hasOwnProperty("permission_list")) {
                if (!Array.isArray(message.permission_list))
                    return "permission_list: array expected";
                for (var i = 0; i < message.permission_list.length; ++i)
                    switch (message.permission_list[i]) {
                    default:
                        return "permission_list: enum value[] expected";
                    case -1:
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 24:
                    case 25:
                    case 26:
                    case 27:
                    case 28:
                    case 29:
                    case 30:
                    case 31:
                    case 32:
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                        break;
                    }
            }
            return null;
        };

        return root_permission;
    })();

    svr_to_client.user_permission = (function() {

        /**
         * Properties of a user_permission.
         * @memberof svr_to_client
         * @interface Iuser_permission
         * @property {Array.<common.permission_type>|null} [user_permission_list] user_permission user_permission_list
         */

        /**
         * Constructs a new user_permission.
         * @memberof svr_to_client
         * @classdesc Represents a user_permission.
         * @implements Iuser_permission
         * @constructor
         * @param {svr_to_client.Iuser_permission=} [properties] Properties to set
         */
        function user_permission(properties) {
            this.user_permission_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * user_permission user_permission_list.
         * @member {Array.<common.permission_type>} user_permission_list
         * @memberof svr_to_client.user_permission
         * @instance
         */
        user_permission.prototype.user_permission_list = $util.emptyArray;

        /**
         * Creates a new user_permission instance using the specified properties.
         * @function create
         * @memberof svr_to_client.user_permission
         * @static
         * @param {svr_to_client.Iuser_permission=} [properties] Properties to set
         * @returns {svr_to_client.user_permission} user_permission instance
         */
        user_permission.create = function create(properties) {
            return new user_permission(properties);
        };

        /**
         * Encodes the specified user_permission message. Does not implicitly {@link svr_to_client.user_permission.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.user_permission
         * @static
         * @param {svr_to_client.Iuser_permission} message user_permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_permission.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_permission_list != null && message.user_permission_list.length)
                for (var i = 0; i < message.user_permission_list.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.user_permission_list[i]);
            return writer;
        };

        /**
         * Encodes the specified user_permission message, length delimited. Does not implicitly {@link svr_to_client.user_permission.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.user_permission
         * @static
         * @param {svr_to_client.Iuser_permission} message user_permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_permission.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a user_permission message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.user_permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.user_permission} user_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_permission.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.user_permission();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.user_permission_list && message.user_permission_list.length))
                        message.user_permission_list = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.user_permission_list.push(reader.int32());
                    } else
                        message.user_permission_list.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a user_permission message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.user_permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.user_permission} user_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_permission.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a user_permission message.
         * @function verify
         * @memberof svr_to_client.user_permission
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        user_permission.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_permission_list != null && message.hasOwnProperty("user_permission_list")) {
                if (!Array.isArray(message.user_permission_list))
                    return "user_permission_list: array expected";
                for (var i = 0; i < message.user_permission_list.length; ++i)
                    switch (message.user_permission_list[i]) {
                    default:
                        return "user_permission_list: enum value[] expected";
                    case -1:
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 24:
                    case 25:
                    case 26:
                    case 27:
                    case 28:
                    case 29:
                    case 30:
                    case 31:
                    case 32:
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                        break;
                    }
            }
            return null;
        };

        return user_permission;
    })();

    svr_to_client.project_member = (function() {

        /**
         * Properties of a project_member.
         * @memberof svr_to_client
         * @interface Iproject_member
         * @property {string} parent_project project_member parent_project
         * @property {string} project_name project_member project_name
         * @property {Array.<string>|null} [groups] project_member groups
         * @property {Array.<svr_to_client.Iproject_user_data>|null} [users] project_member users
         */

        /**
         * Constructs a new project_member.
         * @memberof svr_to_client
         * @classdesc Represents a project_member.
         * @implements Iproject_member
         * @constructor
         * @param {svr_to_client.Iproject_member=} [properties] Properties to set
         */
        function project_member(properties) {
            this.groups = [];
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * project_member parent_project.
         * @member {string} parent_project
         * @memberof svr_to_client.project_member
         * @instance
         */
        project_member.prototype.parent_project = "";

        /**
         * project_member project_name.
         * @member {string} project_name
         * @memberof svr_to_client.project_member
         * @instance
         */
        project_member.prototype.project_name = "";

        /**
         * project_member groups.
         * @member {Array.<string>} groups
         * @memberof svr_to_client.project_member
         * @instance
         */
        project_member.prototype.groups = $util.emptyArray;

        /**
         * project_member users.
         * @member {Array.<svr_to_client.Iproject_user_data>} users
         * @memberof svr_to_client.project_member
         * @instance
         */
        project_member.prototype.users = $util.emptyArray;

        /**
         * Creates a new project_member instance using the specified properties.
         * @function create
         * @memberof svr_to_client.project_member
         * @static
         * @param {svr_to_client.Iproject_member=} [properties] Properties to set
         * @returns {svr_to_client.project_member} project_member instance
         */
        project_member.create = function create(properties) {
            return new project_member(properties);
        };

        /**
         * Encodes the specified project_member message. Does not implicitly {@link svr_to_client.project_member.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.project_member
         * @static
         * @param {svr_to_client.Iproject_member} message project_member message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        project_member.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent_project);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.project_name);
            if (message.groups != null && message.groups.length)
                for (var i = 0; i < message.groups.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.groups[i]);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.svr_to_client.project_user_data.encode(message.users[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified project_member message, length delimited. Does not implicitly {@link svr_to_client.project_member.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.project_member
         * @static
         * @param {svr_to_client.Iproject_member} message project_member message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        project_member.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a project_member message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.project_member
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.project_member} project_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        project_member.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.project_member();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.parent_project = reader.string();
                    break;
                case 2:
                    message.project_name = reader.string();
                    break;
                case 3:
                    if (!(message.groups && message.groups.length))
                        message.groups = [];
                    message.groups.push(reader.string());
                    break;
                case 4:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.svr_to_client.project_user_data.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("parent_project"))
                throw $util.ProtocolError("missing required 'parent_project'", { instance: message });
            if (!message.hasOwnProperty("project_name"))
                throw $util.ProtocolError("missing required 'project_name'", { instance: message });
            return message;
        };

        /**
         * Decodes a project_member message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.project_member
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.project_member} project_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        project_member.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a project_member message.
         * @function verify
         * @memberof svr_to_client.project_member
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        project_member.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.parent_project))
                return "parent_project: string expected";
            if (!$util.isString(message.project_name))
                return "project_name: string expected";
            if (message.groups != null && message.hasOwnProperty("groups")) {
                if (!Array.isArray(message.groups))
                    return "groups: array expected";
                for (var i = 0; i < message.groups.length; ++i)
                    if (!$util.isString(message.groups[i]))
                        return "groups: string[] expected";
            }
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.svr_to_client.project_user_data.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        return project_member;
    })();

    svr_to_client.project_user_data = (function() {

        /**
         * Properties of a project_user_data.
         * @memberof svr_to_client
         * @interface Iproject_user_data
         * @property {string} name project_user_data name
         * @property {Array.<common.permission_type>|null} [permission_list] project_user_data permission_list
         */

        /**
         * Constructs a new project_user_data.
         * @memberof svr_to_client
         * @classdesc Represents a project_user_data.
         * @implements Iproject_user_data
         * @constructor
         * @param {svr_to_client.Iproject_user_data=} [properties] Properties to set
         */
        function project_user_data(properties) {
            this.permission_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * project_user_data name.
         * @member {string} name
         * @memberof svr_to_client.project_user_data
         * @instance
         */
        project_user_data.prototype.name = "";

        /**
         * project_user_data permission_list.
         * @member {Array.<common.permission_type>} permission_list
         * @memberof svr_to_client.project_user_data
         * @instance
         */
        project_user_data.prototype.permission_list = $util.emptyArray;

        /**
         * Creates a new project_user_data instance using the specified properties.
         * @function create
         * @memberof svr_to_client.project_user_data
         * @static
         * @param {svr_to_client.Iproject_user_data=} [properties] Properties to set
         * @returns {svr_to_client.project_user_data} project_user_data instance
         */
        project_user_data.create = function create(properties) {
            return new project_user_data(properties);
        };

        /**
         * Encodes the specified project_user_data message. Does not implicitly {@link svr_to_client.project_user_data.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.project_user_data
         * @static
         * @param {svr_to_client.Iproject_user_data} message project_user_data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        project_user_data.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.permission_list != null && message.permission_list.length)
                for (var i = 0; i < message.permission_list.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.permission_list[i]);
            return writer;
        };

        /**
         * Encodes the specified project_user_data message, length delimited. Does not implicitly {@link svr_to_client.project_user_data.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.project_user_data
         * @static
         * @param {svr_to_client.Iproject_user_data} message project_user_data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        project_user_data.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a project_user_data message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.project_user_data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.project_user_data} project_user_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        project_user_data.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.project_user_data();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.permission_list && message.permission_list.length))
                        message.permission_list = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.permission_list.push(reader.int32());
                    } else
                        message.permission_list.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a project_user_data message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.project_user_data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.project_user_data} project_user_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        project_user_data.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a project_user_data message.
         * @function verify
         * @memberof svr_to_client.project_user_data
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        project_user_data.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.permission_list != null && message.hasOwnProperty("permission_list")) {
                if (!Array.isArray(message.permission_list))
                    return "permission_list: array expected";
                for (var i = 0; i < message.permission_list.length; ++i)
                    switch (message.permission_list[i]) {
                    default:
                        return "permission_list: enum value[] expected";
                    case -1:
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 24:
                    case 25:
                    case 26:
                    case 27:
                    case 28:
                    case 29:
                    case 30:
                    case 31:
                    case 32:
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                        break;
                    }
            }
            return null;
        };

        return project_user_data;
    })();

    svr_to_client.group_member = (function() {

        /**
         * Properties of a group_member.
         * @memberof svr_to_client
         * @interface Igroup_member
         * @property {string} group_name group_member group_name
         * @property {Array.<string>|null} [users] group_member users
         */

        /**
         * Constructs a new group_member.
         * @memberof svr_to_client
         * @classdesc Represents a group_member.
         * @implements Igroup_member
         * @constructor
         * @param {svr_to_client.Igroup_member=} [properties] Properties to set
         */
        function group_member(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * group_member group_name.
         * @member {string} group_name
         * @memberof svr_to_client.group_member
         * @instance
         */
        group_member.prototype.group_name = "";

        /**
         * group_member users.
         * @member {Array.<string>} users
         * @memberof svr_to_client.group_member
         * @instance
         */
        group_member.prototype.users = $util.emptyArray;

        /**
         * Creates a new group_member instance using the specified properties.
         * @function create
         * @memberof svr_to_client.group_member
         * @static
         * @param {svr_to_client.Igroup_member=} [properties] Properties to set
         * @returns {svr_to_client.group_member} group_member instance
         */
        group_member.create = function create(properties) {
            return new group_member(properties);
        };

        /**
         * Encodes the specified group_member message. Does not implicitly {@link svr_to_client.group_member.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.group_member
         * @static
         * @param {svr_to_client.Igroup_member} message group_member message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        group_member.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.group_name);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.users[i]);
            return writer;
        };

        /**
         * Encodes the specified group_member message, length delimited. Does not implicitly {@link svr_to_client.group_member.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.group_member
         * @static
         * @param {svr_to_client.Igroup_member} message group_member message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        group_member.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a group_member message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.group_member
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.group_member} group_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        group_member.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.group_member();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.group_name = reader.string();
                    break;
                case 2:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("group_name"))
                throw $util.ProtocolError("missing required 'group_name'", { instance: message });
            return message;
        };

        /**
         * Decodes a group_member message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.group_member
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.group_member} group_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        group_member.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a group_member message.
         * @function verify
         * @memberof svr_to_client.group_member
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        group_member.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.group_name))
                return "group_name: string expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i)
                    if (!$util.isString(message.users[i]))
                        return "users: string[] expected";
            }
            return null;
        };

        return group_member;
    })();

    svr_to_client.all_group_list = (function() {

        /**
         * Properties of an all_group_list.
         * @memberof svr_to_client
         * @interface Iall_group_list
         * @property {Array.<string>|null} [group] all_group_list group
         */

        /**
         * Constructs a new all_group_list.
         * @memberof svr_to_client
         * @classdesc Represents an all_group_list.
         * @implements Iall_group_list
         * @constructor
         * @param {svr_to_client.Iall_group_list=} [properties] Properties to set
         */
        function all_group_list(properties) {
            this.group = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * all_group_list group.
         * @member {Array.<string>} group
         * @memberof svr_to_client.all_group_list
         * @instance
         */
        all_group_list.prototype.group = $util.emptyArray;

        /**
         * Creates a new all_group_list instance using the specified properties.
         * @function create
         * @memberof svr_to_client.all_group_list
         * @static
         * @param {svr_to_client.Iall_group_list=} [properties] Properties to set
         * @returns {svr_to_client.all_group_list} all_group_list instance
         */
        all_group_list.create = function create(properties) {
            return new all_group_list(properties);
        };

        /**
         * Encodes the specified all_group_list message. Does not implicitly {@link svr_to_client.all_group_list.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.all_group_list
         * @static
         * @param {svr_to_client.Iall_group_list} message all_group_list message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        all_group_list.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.group != null && message.group.length)
                for (var i = 0; i < message.group.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.group[i]);
            return writer;
        };

        /**
         * Encodes the specified all_group_list message, length delimited. Does not implicitly {@link svr_to_client.all_group_list.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.all_group_list
         * @static
         * @param {svr_to_client.Iall_group_list} message all_group_list message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        all_group_list.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an all_group_list message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.all_group_list
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.all_group_list} all_group_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        all_group_list.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.all_group_list();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.group && message.group.length))
                        message.group = [];
                    message.group.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an all_group_list message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.all_group_list
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.all_group_list} all_group_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        all_group_list.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an all_group_list message.
         * @function verify
         * @memberof svr_to_client.all_group_list
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        all_group_list.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.group != null && message.hasOwnProperty("group")) {
                if (!Array.isArray(message.group))
                    return "group: array expected";
                for (var i = 0; i < message.group.length; ++i)
                    if (!$util.isString(message.group[i]))
                        return "group: string[] expected";
            }
            return null;
        };

        return all_group_list;
    })();

    svr_to_client.group_permission = (function() {

        /**
         * Properties of a group_permission.
         * @memberof svr_to_client
         * @interface Igroup_permission
         * @property {string} group_name group_permission group_name
         * @property {Array.<common.permission_type>|null} [group_permission_list] group_permission group_permission_list
         */

        /**
         * Constructs a new group_permission.
         * @memberof svr_to_client
         * @classdesc Represents a group_permission.
         * @implements Igroup_permission
         * @constructor
         * @param {svr_to_client.Igroup_permission=} [properties] Properties to set
         */
        function group_permission(properties) {
            this.group_permission_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * group_permission group_name.
         * @member {string} group_name
         * @memberof svr_to_client.group_permission
         * @instance
         */
        group_permission.prototype.group_name = "";

        /**
         * group_permission group_permission_list.
         * @member {Array.<common.permission_type>} group_permission_list
         * @memberof svr_to_client.group_permission
         * @instance
         */
        group_permission.prototype.group_permission_list = $util.emptyArray;

        /**
         * Creates a new group_permission instance using the specified properties.
         * @function create
         * @memberof svr_to_client.group_permission
         * @static
         * @param {svr_to_client.Igroup_permission=} [properties] Properties to set
         * @returns {svr_to_client.group_permission} group_permission instance
         */
        group_permission.create = function create(properties) {
            return new group_permission(properties);
        };

        /**
         * Encodes the specified group_permission message. Does not implicitly {@link svr_to_client.group_permission.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.group_permission
         * @static
         * @param {svr_to_client.Igroup_permission} message group_permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        group_permission.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.group_name);
            if (message.group_permission_list != null && message.group_permission_list.length)
                for (var i = 0; i < message.group_permission_list.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.group_permission_list[i]);
            return writer;
        };

        /**
         * Encodes the specified group_permission message, length delimited. Does not implicitly {@link svr_to_client.group_permission.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.group_permission
         * @static
         * @param {svr_to_client.Igroup_permission} message group_permission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        group_permission.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a group_permission message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.group_permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.group_permission} group_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        group_permission.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.group_permission();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.group_name = reader.string();
                    break;
                case 2:
                    if (!(message.group_permission_list && message.group_permission_list.length))
                        message.group_permission_list = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.group_permission_list.push(reader.int32());
                    } else
                        message.group_permission_list.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("group_name"))
                throw $util.ProtocolError("missing required 'group_name'", { instance: message });
            return message;
        };

        /**
         * Decodes a group_permission message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.group_permission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.group_permission} group_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        group_permission.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a group_permission message.
         * @function verify
         * @memberof svr_to_client.group_permission
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        group_permission.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.group_name))
                return "group_name: string expected";
            if (message.group_permission_list != null && message.hasOwnProperty("group_permission_list")) {
                if (!Array.isArray(message.group_permission_list))
                    return "group_permission_list: array expected";
                for (var i = 0; i < message.group_permission_list.length; ++i)
                    switch (message.group_permission_list[i]) {
                    default:
                        return "group_permission_list: enum value[] expected";
                    case -1:
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 24:
                    case 25:
                    case 26:
                    case 27:
                    case 28:
                    case 29:
                    case 30:
                    case 31:
                    case 32:
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                        break;
                    }
            }
            return null;
        };

        return group_permission;
    })();

    svr_to_client.project = (function() {

        /**
         * Properties of a project.
         * @memberof svr_to_client
         * @interface Iproject
         * @property {string} project project project
         * @property {string} sub_project project sub_project
         */

        /**
         * Constructs a new project.
         * @memberof svr_to_client
         * @classdesc Represents a project.
         * @implements Iproject
         * @constructor
         * @param {svr_to_client.Iproject=} [properties] Properties to set
         */
        function project(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * project project.
         * @member {string} project
         * @memberof svr_to_client.project
         * @instance
         */
        project.prototype.project = "";

        /**
         * project sub_project.
         * @member {string} sub_project
         * @memberof svr_to_client.project
         * @instance
         */
        project.prototype.sub_project = "";

        /**
         * Creates a new project instance using the specified properties.
         * @function create
         * @memberof svr_to_client.project
         * @static
         * @param {svr_to_client.Iproject=} [properties] Properties to set
         * @returns {svr_to_client.project} project instance
         */
        project.create = function create(properties) {
            return new project(properties);
        };

        /**
         * Encodes the specified project message. Does not implicitly {@link svr_to_client.project.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.project
         * @static
         * @param {svr_to_client.Iproject} message project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        project.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.project);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sub_project);
            return writer;
        };

        /**
         * Encodes the specified project message, length delimited. Does not implicitly {@link svr_to_client.project.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.project
         * @static
         * @param {svr_to_client.Iproject} message project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        project.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a project message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.project} project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        project.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.project();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.project = reader.string();
                    break;
                case 2:
                    message.sub_project = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            if (!message.hasOwnProperty("sub_project"))
                throw $util.ProtocolError("missing required 'sub_project'", { instance: message });
            return message;
        };

        /**
         * Decodes a project message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.project} project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        project.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a project message.
         * @function verify
         * @memberof svr_to_client.project
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        project.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            if (!$util.isString(message.sub_project))
                return "sub_project: string expected";
            return null;
        };

        return project;
    })();

    svr_to_client.all_project_list = (function() {

        /**
         * Properties of an all_project_list.
         * @memberof svr_to_client
         * @interface Iall_project_list
         * @property {Array.<svr_to_client.Iproject>|null} [project] all_project_list project
         */

        /**
         * Constructs a new all_project_list.
         * @memberof svr_to_client
         * @classdesc Represents an all_project_list.
         * @implements Iall_project_list
         * @constructor
         * @param {svr_to_client.Iall_project_list=} [properties] Properties to set
         */
        function all_project_list(properties) {
            this.project = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * all_project_list project.
         * @member {Array.<svr_to_client.Iproject>} project
         * @memberof svr_to_client.all_project_list
         * @instance
         */
        all_project_list.prototype.project = $util.emptyArray;

        /**
         * Creates a new all_project_list instance using the specified properties.
         * @function create
         * @memberof svr_to_client.all_project_list
         * @static
         * @param {svr_to_client.Iall_project_list=} [properties] Properties to set
         * @returns {svr_to_client.all_project_list} all_project_list instance
         */
        all_project_list.create = function create(properties) {
            return new all_project_list(properties);
        };

        /**
         * Encodes the specified all_project_list message. Does not implicitly {@link svr_to_client.all_project_list.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.all_project_list
         * @static
         * @param {svr_to_client.Iall_project_list} message all_project_list message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        all_project_list.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.project != null && message.project.length)
                for (var i = 0; i < message.project.length; ++i)
                    $root.svr_to_client.project.encode(message.project[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified all_project_list message, length delimited. Does not implicitly {@link svr_to_client.all_project_list.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.all_project_list
         * @static
         * @param {svr_to_client.Iall_project_list} message all_project_list message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        all_project_list.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an all_project_list message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.all_project_list
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.all_project_list} all_project_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        all_project_list.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.all_project_list();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.project && message.project.length))
                        message.project = [];
                    message.project.push($root.svr_to_client.project.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an all_project_list message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.all_project_list
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.all_project_list} all_project_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        all_project_list.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an all_project_list message.
         * @function verify
         * @memberof svr_to_client.all_project_list
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        all_project_list.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.project != null && message.hasOwnProperty("project")) {
                if (!Array.isArray(message.project))
                    return "project: array expected";
                for (var i = 0; i < message.project.length; ++i) {
                    var error = $root.svr_to_client.project.verify(message.project[i]);
                    if (error)
                        return "project." + error;
                }
            }
            return null;
        };

        return all_project_list;
    })();

    svr_to_client.verification_code_ntf = (function() {

        /**
         * Properties of a verification_code_ntf.
         * @memberof svr_to_client
         * @interface Iverification_code_ntf
         * @property {string|null} [verification_code] verification_code_ntf verification_code
         */

        /**
         * Constructs a new verification_code_ntf.
         * @memberof svr_to_client
         * @classdesc Represents a verification_code_ntf.
         * @implements Iverification_code_ntf
         * @constructor
         * @param {svr_to_client.Iverification_code_ntf=} [properties] Properties to set
         */
        function verification_code_ntf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * verification_code_ntf verification_code.
         * @member {string} verification_code
         * @memberof svr_to_client.verification_code_ntf
         * @instance
         */
        verification_code_ntf.prototype.verification_code = "";

        /**
         * Creates a new verification_code_ntf instance using the specified properties.
         * @function create
         * @memberof svr_to_client.verification_code_ntf
         * @static
         * @param {svr_to_client.Iverification_code_ntf=} [properties] Properties to set
         * @returns {svr_to_client.verification_code_ntf} verification_code_ntf instance
         */
        verification_code_ntf.create = function create(properties) {
            return new verification_code_ntf(properties);
        };

        /**
         * Encodes the specified verification_code_ntf message. Does not implicitly {@link svr_to_client.verification_code_ntf.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.verification_code_ntf
         * @static
         * @param {svr_to_client.Iverification_code_ntf} message verification_code_ntf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        verification_code_ntf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.verification_code != null && message.hasOwnProperty("verification_code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.verification_code);
            return writer;
        };

        /**
         * Encodes the specified verification_code_ntf message, length delimited. Does not implicitly {@link svr_to_client.verification_code_ntf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.verification_code_ntf
         * @static
         * @param {svr_to_client.Iverification_code_ntf} message verification_code_ntf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        verification_code_ntf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a verification_code_ntf message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.verification_code_ntf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.verification_code_ntf} verification_code_ntf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        verification_code_ntf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.verification_code_ntf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.verification_code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a verification_code_ntf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.verification_code_ntf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.verification_code_ntf} verification_code_ntf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        verification_code_ntf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a verification_code_ntf message.
         * @function verify
         * @memberof svr_to_client.verification_code_ntf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        verification_code_ntf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.verification_code != null && message.hasOwnProperty("verification_code"))
                if (!$util.isString(message.verification_code))
                    return "verification_code: string expected";
            return null;
        };

        return verification_code_ntf;
    })();

    svr_to_client.project_repository = (function() {

        /**
         * Properties of a project_repository.
         * @memberof svr_to_client
         * @interface Iproject_repository
         * @property {string} project project_repository project
         * @property {string} sub_project project_repository sub_project
         * @property {common.repository_type} repository project_repository repository
         * @property {Array.<svr_to_client.Irepository_group>|null} [groups] project_repository groups
         */

        /**
         * Constructs a new project_repository.
         * @memberof svr_to_client
         * @classdesc Represents a project_repository.
         * @implements Iproject_repository
         * @constructor
         * @param {svr_to_client.Iproject_repository=} [properties] Properties to set
         */
        function project_repository(properties) {
            this.groups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * project_repository project.
         * @member {string} project
         * @memberof svr_to_client.project_repository
         * @instance
         */
        project_repository.prototype.project = "";

        /**
         * project_repository sub_project.
         * @member {string} sub_project
         * @memberof svr_to_client.project_repository
         * @instance
         */
        project_repository.prototype.sub_project = "";

        /**
         * project_repository repository.
         * @member {common.repository_type} repository
         * @memberof svr_to_client.project_repository
         * @instance
         */
        project_repository.prototype.repository = 0;

        /**
         * project_repository groups.
         * @member {Array.<svr_to_client.Irepository_group>} groups
         * @memberof svr_to_client.project_repository
         * @instance
         */
        project_repository.prototype.groups = $util.emptyArray;

        /**
         * Creates a new project_repository instance using the specified properties.
         * @function create
         * @memberof svr_to_client.project_repository
         * @static
         * @param {svr_to_client.Iproject_repository=} [properties] Properties to set
         * @returns {svr_to_client.project_repository} project_repository instance
         */
        project_repository.create = function create(properties) {
            return new project_repository(properties);
        };

        /**
         * Encodes the specified project_repository message. Does not implicitly {@link svr_to_client.project_repository.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.project_repository
         * @static
         * @param {svr_to_client.Iproject_repository} message project_repository message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        project_repository.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.project);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sub_project);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.repository);
            if (message.groups != null && message.groups.length)
                for (var i = 0; i < message.groups.length; ++i)
                    $root.svr_to_client.repository_group.encode(message.groups[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified project_repository message, length delimited. Does not implicitly {@link svr_to_client.project_repository.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.project_repository
         * @static
         * @param {svr_to_client.Iproject_repository} message project_repository message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        project_repository.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a project_repository message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.project_repository
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.project_repository} project_repository
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        project_repository.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.project_repository();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.project = reader.string();
                    break;
                case 2:
                    message.sub_project = reader.string();
                    break;
                case 3:
                    message.repository = reader.int32();
                    break;
                case 4:
                    if (!(message.groups && message.groups.length))
                        message.groups = [];
                    message.groups.push($root.svr_to_client.repository_group.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            if (!message.hasOwnProperty("sub_project"))
                throw $util.ProtocolError("missing required 'sub_project'", { instance: message });
            if (!message.hasOwnProperty("repository"))
                throw $util.ProtocolError("missing required 'repository'", { instance: message });
            return message;
        };

        /**
         * Decodes a project_repository message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.project_repository
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.project_repository} project_repository
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        project_repository.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a project_repository message.
         * @function verify
         * @memberof svr_to_client.project_repository
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        project_repository.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            if (!$util.isString(message.sub_project))
                return "sub_project: string expected";
            switch (message.repository) {
            default:
                return "repository: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
            if (message.groups != null && message.hasOwnProperty("groups")) {
                if (!Array.isArray(message.groups))
                    return "groups: array expected";
                for (var i = 0; i < message.groups.length; ++i) {
                    var error = $root.svr_to_client.repository_group.verify(message.groups[i]);
                    if (error)
                        return "groups." + error;
                }
            }
            return null;
        };

        return project_repository;
    })();

    svr_to_client.repository_group = (function() {

        /**
         * Properties of a repository_group.
         * @memberof svr_to_client
         * @interface Irepository_group
         * @property {string} name repository_group name
         * @property {Array.<svr_to_client.Irepository_group_leaf>|null} [leafs] repository_group leafs
         */

        /**
         * Constructs a new repository_group.
         * @memberof svr_to_client
         * @classdesc Represents a repository_group.
         * @implements Irepository_group
         * @constructor
         * @param {svr_to_client.Irepository_group=} [properties] Properties to set
         */
        function repository_group(properties) {
            this.leafs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * repository_group name.
         * @member {string} name
         * @memberof svr_to_client.repository_group
         * @instance
         */
        repository_group.prototype.name = "";

        /**
         * repository_group leafs.
         * @member {Array.<svr_to_client.Irepository_group_leaf>} leafs
         * @memberof svr_to_client.repository_group
         * @instance
         */
        repository_group.prototype.leafs = $util.emptyArray;

        /**
         * Creates a new repository_group instance using the specified properties.
         * @function create
         * @memberof svr_to_client.repository_group
         * @static
         * @param {svr_to_client.Irepository_group=} [properties] Properties to set
         * @returns {svr_to_client.repository_group} repository_group instance
         */
        repository_group.create = function create(properties) {
            return new repository_group(properties);
        };

        /**
         * Encodes the specified repository_group message. Does not implicitly {@link svr_to_client.repository_group.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.repository_group
         * @static
         * @param {svr_to_client.Irepository_group} message repository_group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        repository_group.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.leafs != null && message.leafs.length)
                for (var i = 0; i < message.leafs.length; ++i)
                    $root.svr_to_client.repository_group_leaf.encode(message.leafs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified repository_group message, length delimited. Does not implicitly {@link svr_to_client.repository_group.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.repository_group
         * @static
         * @param {svr_to_client.Irepository_group} message repository_group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        repository_group.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a repository_group message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.repository_group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.repository_group} repository_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        repository_group.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.repository_group();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.leafs && message.leafs.length))
                        message.leafs = [];
                    message.leafs.push($root.svr_to_client.repository_group_leaf.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a repository_group message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.repository_group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.repository_group} repository_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        repository_group.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a repository_group message.
         * @function verify
         * @memberof svr_to_client.repository_group
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        repository_group.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.leafs != null && message.hasOwnProperty("leafs")) {
                if (!Array.isArray(message.leafs))
                    return "leafs: array expected";
                for (var i = 0; i < message.leafs.length; ++i) {
                    var error = $root.svr_to_client.repository_group_leaf.verify(message.leafs[i]);
                    if (error)
                        return "leafs." + error;
                }
            }
            return null;
        };

        return repository_group;
    })();

    svr_to_client.repository_group_leaf = (function() {

        /**
         * Properties of a repository_group_leaf.
         * @memberof svr_to_client
         * @interface Irepository_group_leaf
         * @property {string} name repository_group_leaf name
         * @property {number} res_num repository_group_leaf res_num
         */

        /**
         * Constructs a new repository_group_leaf.
         * @memberof svr_to_client
         * @classdesc Represents a repository_group_leaf.
         * @implements Irepository_group_leaf
         * @constructor
         * @param {svr_to_client.Irepository_group_leaf=} [properties] Properties to set
         */
        function repository_group_leaf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * repository_group_leaf name.
         * @member {string} name
         * @memberof svr_to_client.repository_group_leaf
         * @instance
         */
        repository_group_leaf.prototype.name = "";

        /**
         * repository_group_leaf res_num.
         * @member {number} res_num
         * @memberof svr_to_client.repository_group_leaf
         * @instance
         */
        repository_group_leaf.prototype.res_num = 0;

        /**
         * Creates a new repository_group_leaf instance using the specified properties.
         * @function create
         * @memberof svr_to_client.repository_group_leaf
         * @static
         * @param {svr_to_client.Irepository_group_leaf=} [properties] Properties to set
         * @returns {svr_to_client.repository_group_leaf} repository_group_leaf instance
         */
        repository_group_leaf.create = function create(properties) {
            return new repository_group_leaf(properties);
        };

        /**
         * Encodes the specified repository_group_leaf message. Does not implicitly {@link svr_to_client.repository_group_leaf.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.repository_group_leaf
         * @static
         * @param {svr_to_client.Irepository_group_leaf} message repository_group_leaf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        repository_group_leaf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.res_num);
            return writer;
        };

        /**
         * Encodes the specified repository_group_leaf message, length delimited. Does not implicitly {@link svr_to_client.repository_group_leaf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.repository_group_leaf
         * @static
         * @param {svr_to_client.Irepository_group_leaf} message repository_group_leaf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        repository_group_leaf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a repository_group_leaf message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.repository_group_leaf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.repository_group_leaf} repository_group_leaf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        repository_group_leaf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.repository_group_leaf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.res_num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("res_num"))
                throw $util.ProtocolError("missing required 'res_num'", { instance: message });
            return message;
        };

        /**
         * Decodes a repository_group_leaf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.repository_group_leaf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.repository_group_leaf} repository_group_leaf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        repository_group_leaf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a repository_group_leaf message.
         * @function verify
         * @memberof svr_to_client.repository_group_leaf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        repository_group_leaf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.res_num))
                return "res_num: integer expected";
            return null;
        };

        return repository_group_leaf;
    })();

    svr_to_client.create_project_result = (function() {

        /**
         * Properties of a create_project_result.
         * @memberof svr_to_client
         * @interface Icreate_project_result
         * @property {string} parent create_project_result parent
         * @property {string} project create_project_result project
         */

        /**
         * Constructs a new create_project_result.
         * @memberof svr_to_client
         * @classdesc Represents a create_project_result.
         * @implements Icreate_project_result
         * @constructor
         * @param {svr_to_client.Icreate_project_result=} [properties] Properties to set
         */
        function create_project_result(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * create_project_result parent.
         * @member {string} parent
         * @memberof svr_to_client.create_project_result
         * @instance
         */
        create_project_result.prototype.parent = "";

        /**
         * create_project_result project.
         * @member {string} project
         * @memberof svr_to_client.create_project_result
         * @instance
         */
        create_project_result.prototype.project = "";

        /**
         * Creates a new create_project_result instance using the specified properties.
         * @function create
         * @memberof svr_to_client.create_project_result
         * @static
         * @param {svr_to_client.Icreate_project_result=} [properties] Properties to set
         * @returns {svr_to_client.create_project_result} create_project_result instance
         */
        create_project_result.create = function create(properties) {
            return new create_project_result(properties);
        };

        /**
         * Encodes the specified create_project_result message. Does not implicitly {@link svr_to_client.create_project_result.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.create_project_result
         * @static
         * @param {svr_to_client.Icreate_project_result} message create_project_result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        create_project_result.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.project);
            return writer;
        };

        /**
         * Encodes the specified create_project_result message, length delimited. Does not implicitly {@link svr_to_client.create_project_result.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.create_project_result
         * @static
         * @param {svr_to_client.Icreate_project_result} message create_project_result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        create_project_result.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a create_project_result message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.create_project_result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.create_project_result} create_project_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        create_project_result.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.create_project_result();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.parent = reader.string();
                    break;
                case 2:
                    message.project = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("parent"))
                throw $util.ProtocolError("missing required 'parent'", { instance: message });
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            return message;
        };

        /**
         * Decodes a create_project_result message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.create_project_result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.create_project_result} create_project_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        create_project_result.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a create_project_result message.
         * @function verify
         * @memberof svr_to_client.create_project_result
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        create_project_result.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.parent))
                return "parent: string expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            return null;
        };

        return create_project_result;
    })();

    svr_to_client.editor_repository_group = (function() {

        /**
         * Properties of an editor_repository_group.
         * @memberof svr_to_client
         * @interface Ieditor_repository_group
         * @property {string} project editor_repository_group project
         * @property {string} sub_project editor_repository_group sub_project
         * @property {string} parent editor_repository_group parent
         * @property {string} name editor_repository_group name
         * @property {common.repository_type} repository_type editor_repository_group repository_type
         */

        /**
         * Constructs a new editor_repository_group.
         * @memberof svr_to_client
         * @classdesc Represents an editor_repository_group.
         * @implements Ieditor_repository_group
         * @constructor
         * @param {svr_to_client.Ieditor_repository_group=} [properties] Properties to set
         */
        function editor_repository_group(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * editor_repository_group project.
         * @member {string} project
         * @memberof svr_to_client.editor_repository_group
         * @instance
         */
        editor_repository_group.prototype.project = "";

        /**
         * editor_repository_group sub_project.
         * @member {string} sub_project
         * @memberof svr_to_client.editor_repository_group
         * @instance
         */
        editor_repository_group.prototype.sub_project = "";

        /**
         * editor_repository_group parent.
         * @member {string} parent
         * @memberof svr_to_client.editor_repository_group
         * @instance
         */
        editor_repository_group.prototype.parent = "";

        /**
         * editor_repository_group name.
         * @member {string} name
         * @memberof svr_to_client.editor_repository_group
         * @instance
         */
        editor_repository_group.prototype.name = "";

        /**
         * editor_repository_group repository_type.
         * @member {common.repository_type} repository_type
         * @memberof svr_to_client.editor_repository_group
         * @instance
         */
        editor_repository_group.prototype.repository_type = 0;

        /**
         * Creates a new editor_repository_group instance using the specified properties.
         * @function create
         * @memberof svr_to_client.editor_repository_group
         * @static
         * @param {svr_to_client.Ieditor_repository_group=} [properties] Properties to set
         * @returns {svr_to_client.editor_repository_group} editor_repository_group instance
         */
        editor_repository_group.create = function create(properties) {
            return new editor_repository_group(properties);
        };

        /**
         * Encodes the specified editor_repository_group message. Does not implicitly {@link svr_to_client.editor_repository_group.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.editor_repository_group
         * @static
         * @param {svr_to_client.Ieditor_repository_group} message editor_repository_group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        editor_repository_group.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.project);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sub_project);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.parent);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.repository_type);
            return writer;
        };

        /**
         * Encodes the specified editor_repository_group message, length delimited. Does not implicitly {@link svr_to_client.editor_repository_group.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.editor_repository_group
         * @static
         * @param {svr_to_client.Ieditor_repository_group} message editor_repository_group message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        editor_repository_group.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an editor_repository_group message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.editor_repository_group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.editor_repository_group} editor_repository_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        editor_repository_group.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.editor_repository_group();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.project = reader.string();
                    break;
                case 2:
                    message.sub_project = reader.string();
                    break;
                case 3:
                    message.parent = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.repository_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("project"))
                throw $util.ProtocolError("missing required 'project'", { instance: message });
            if (!message.hasOwnProperty("sub_project"))
                throw $util.ProtocolError("missing required 'sub_project'", { instance: message });
            if (!message.hasOwnProperty("parent"))
                throw $util.ProtocolError("missing required 'parent'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("repository_type"))
                throw $util.ProtocolError("missing required 'repository_type'", { instance: message });
            return message;
        };

        /**
         * Decodes an editor_repository_group message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.editor_repository_group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.editor_repository_group} editor_repository_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        editor_repository_group.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an editor_repository_group message.
         * @function verify
         * @memberof svr_to_client.editor_repository_group
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        editor_repository_group.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.project))
                return "project: string expected";
            if (!$util.isString(message.sub_project))
                return "sub_project: string expected";
            if (!$util.isString(message.parent))
                return "parent: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            switch (message.repository_type) {
            default:
                return "repository_type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
            return null;
        };

        return editor_repository_group;
    })();

    /**
     * svr_msg_id enum.
     * @name svr_to_client.svr_msg_id
     * @enum {string}
     * @property {number} status_code_ntf_id=1 status_code_ntf_id value
     * @property {number} user_token_id=2 user_token_id value
     * @property {number} root_permission_id=3 root_permission_id value
     * @property {number} user_permission_id=4 user_permission_id value
     * @property {number} project_member_id=5 project_member_id value
     * @property {number} group_member_id=6 group_member_id value
     * @property {number} all_group_list_id=7 all_group_list_id value
     * @property {number} group_permission_id=8 group_permission_id value
     * @property {number} all_project_list_id=9 all_project_list_id value
     * @property {number} verification_code_ntf_id=10 verification_code_ntf_id value
     * @property {number} project_repository_id=11 project_repository_id value
     * @property {number} create_project_result_id=12 create_project_result_id value
     * @property {number} create_repository_group_id=13 create_repository_group_id value
     * @property {number} delete_repository_group_id=14 delete_repository_group_id value
     */
    svr_to_client.svr_msg_id = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "status_code_ntf_id"] = 1;
        values[valuesById[2] = "user_token_id"] = 2;
        values[valuesById[3] = "root_permission_id"] = 3;
        values[valuesById[4] = "user_permission_id"] = 4;
        values[valuesById[5] = "project_member_id"] = 5;
        values[valuesById[6] = "group_member_id"] = 6;
        values[valuesById[7] = "all_group_list_id"] = 7;
        values[valuesById[8] = "group_permission_id"] = 8;
        values[valuesById[9] = "all_project_list_id"] = 9;
        values[valuesById[10] = "verification_code_ntf_id"] = 10;
        values[valuesById[11] = "project_repository_id"] = 11;
        values[valuesById[12] = "create_project_result_id"] = 12;
        values[valuesById[13] = "create_repository_group_id"] = 13;
        values[valuesById[14] = "delete_repository_group_id"] = 14;
        return values;
    })();

    svr_to_client.svr_msg = (function() {

        /**
         * Properties of a svr_msg.
         * @memberof svr_to_client
         * @interface Isvr_msg
         * @property {svr_to_client.svr_msg_id} _id svr_msg _id
         * @property {svr_to_client.Istatus_code_ntf|null} [_status_code_ntf] svr_msg _status_code_ntf
         * @property {svr_to_client.Iuser_token|null} [_user_token] svr_msg _user_token
         * @property {svr_to_client.Iroot_permission|null} [_root_permission] svr_msg _root_permission
         * @property {svr_to_client.Iuser_permission|null} [_user_permission] svr_msg _user_permission
         * @property {svr_to_client.Iproject_member|null} [_project_member] svr_msg _project_member
         * @property {svr_to_client.Igroup_member|null} [_group_member] svr_msg _group_member
         * @property {svr_to_client.Iall_group_list|null} [_all_group_list] svr_msg _all_group_list
         * @property {svr_to_client.Igroup_permission|null} [_group_permission] svr_msg _group_permission
         * @property {svr_to_client.Iall_project_list|null} [_all_project_list] svr_msg _all_project_list
         * @property {svr_to_client.Iverification_code_ntf|null} [_verification_code_ntf] svr_msg _verification_code_ntf
         * @property {svr_to_client.Iproject_repository|null} [_project_repository] svr_msg _project_repository
         * @property {svr_to_client.Icreate_project_result|null} [_create_project_result] svr_msg _create_project_result
         * @property {svr_to_client.Ieditor_repository_group|null} [_create_repository_group] svr_msg _create_repository_group
         * @property {svr_to_client.Ieditor_repository_group|null} [_delete_repository_group] svr_msg _delete_repository_group
         */

        /**
         * Constructs a new svr_msg.
         * @memberof svr_to_client
         * @classdesc Represents a svr_msg.
         * @implements Isvr_msg
         * @constructor
         * @param {svr_to_client.Isvr_msg=} [properties] Properties to set
         */
        function svr_msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * svr_msg _id.
         * @member {svr_to_client.svr_msg_id} _id
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._id = 1;

        /**
         * svr_msg _status_code_ntf.
         * @member {svr_to_client.Istatus_code_ntf|null|undefined} _status_code_ntf
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._status_code_ntf = null;

        /**
         * svr_msg _user_token.
         * @member {svr_to_client.Iuser_token|null|undefined} _user_token
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._user_token = null;

        /**
         * svr_msg _root_permission.
         * @member {svr_to_client.Iroot_permission|null|undefined} _root_permission
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._root_permission = null;

        /**
         * svr_msg _user_permission.
         * @member {svr_to_client.Iuser_permission|null|undefined} _user_permission
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._user_permission = null;

        /**
         * svr_msg _project_member.
         * @member {svr_to_client.Iproject_member|null|undefined} _project_member
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._project_member = null;

        /**
         * svr_msg _group_member.
         * @member {svr_to_client.Igroup_member|null|undefined} _group_member
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._group_member = null;

        /**
         * svr_msg _all_group_list.
         * @member {svr_to_client.Iall_group_list|null|undefined} _all_group_list
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._all_group_list = null;

        /**
         * svr_msg _group_permission.
         * @member {svr_to_client.Igroup_permission|null|undefined} _group_permission
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._group_permission = null;

        /**
         * svr_msg _all_project_list.
         * @member {svr_to_client.Iall_project_list|null|undefined} _all_project_list
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._all_project_list = null;

        /**
         * svr_msg _verification_code_ntf.
         * @member {svr_to_client.Iverification_code_ntf|null|undefined} _verification_code_ntf
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._verification_code_ntf = null;

        /**
         * svr_msg _project_repository.
         * @member {svr_to_client.Iproject_repository|null|undefined} _project_repository
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._project_repository = null;

        /**
         * svr_msg _create_project_result.
         * @member {svr_to_client.Icreate_project_result|null|undefined} _create_project_result
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._create_project_result = null;

        /**
         * svr_msg _create_repository_group.
         * @member {svr_to_client.Ieditor_repository_group|null|undefined} _create_repository_group
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._create_repository_group = null;

        /**
         * svr_msg _delete_repository_group.
         * @member {svr_to_client.Ieditor_repository_group|null|undefined} _delete_repository_group
         * @memberof svr_to_client.svr_msg
         * @instance
         */
        svr_msg.prototype._delete_repository_group = null;

        /**
         * Creates a new svr_msg instance using the specified properties.
         * @function create
         * @memberof svr_to_client.svr_msg
         * @static
         * @param {svr_to_client.Isvr_msg=} [properties] Properties to set
         * @returns {svr_to_client.svr_msg} svr_msg instance
         */
        svr_msg.create = function create(properties) {
            return new svr_msg(properties);
        };

        /**
         * Encodes the specified svr_msg message. Does not implicitly {@link svr_to_client.svr_msg.verify|verify} messages.
         * @function encode
         * @memberof svr_to_client.svr_msg
         * @static
         * @param {svr_to_client.Isvr_msg} message svr_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        svr_msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message._id);
            if (message._status_code_ntf != null && message.hasOwnProperty("_status_code_ntf"))
                $root.svr_to_client.status_code_ntf.encode(message._status_code_ntf, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message._user_token != null && message.hasOwnProperty("_user_token"))
                $root.svr_to_client.user_token.encode(message._user_token, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message._root_permission != null && message.hasOwnProperty("_root_permission"))
                $root.svr_to_client.root_permission.encode(message._root_permission, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message._user_permission != null && message.hasOwnProperty("_user_permission"))
                $root.svr_to_client.user_permission.encode(message._user_permission, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message._project_member != null && message.hasOwnProperty("_project_member"))
                $root.svr_to_client.project_member.encode(message._project_member, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message._group_member != null && message.hasOwnProperty("_group_member"))
                $root.svr_to_client.group_member.encode(message._group_member, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message._all_group_list != null && message.hasOwnProperty("_all_group_list"))
                $root.svr_to_client.all_group_list.encode(message._all_group_list, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message._group_permission != null && message.hasOwnProperty("_group_permission"))
                $root.svr_to_client.group_permission.encode(message._group_permission, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message._all_project_list != null && message.hasOwnProperty("_all_project_list"))
                $root.svr_to_client.all_project_list.encode(message._all_project_list, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message._verification_code_ntf != null && message.hasOwnProperty("_verification_code_ntf"))
                $root.svr_to_client.verification_code_ntf.encode(message._verification_code_ntf, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message._project_repository != null && message.hasOwnProperty("_project_repository"))
                $root.svr_to_client.project_repository.encode(message._project_repository, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message._create_project_result != null && message.hasOwnProperty("_create_project_result"))
                $root.svr_to_client.create_project_result.encode(message._create_project_result, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message._create_repository_group != null && message.hasOwnProperty("_create_repository_group"))
                $root.svr_to_client.editor_repository_group.encode(message._create_repository_group, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message._delete_repository_group != null && message.hasOwnProperty("_delete_repository_group"))
                $root.svr_to_client.editor_repository_group.encode(message._delete_repository_group, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified svr_msg message, length delimited. Does not implicitly {@link svr_to_client.svr_msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof svr_to_client.svr_msg
         * @static
         * @param {svr_to_client.Isvr_msg} message svr_msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        svr_msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a svr_msg message from the specified reader or buffer.
         * @function decode
         * @memberof svr_to_client.svr_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {svr_to_client.svr_msg} svr_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        svr_msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.svr_to_client.svr_msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message._id = reader.int32();
                    break;
                case 2:
                    message._status_code_ntf = $root.svr_to_client.status_code_ntf.decode(reader, reader.uint32());
                    break;
                case 3:
                    message._user_token = $root.svr_to_client.user_token.decode(reader, reader.uint32());
                    break;
                case 4:
                    message._root_permission = $root.svr_to_client.root_permission.decode(reader, reader.uint32());
                    break;
                case 5:
                    message._user_permission = $root.svr_to_client.user_permission.decode(reader, reader.uint32());
                    break;
                case 6:
                    message._project_member = $root.svr_to_client.project_member.decode(reader, reader.uint32());
                    break;
                case 7:
                    message._group_member = $root.svr_to_client.group_member.decode(reader, reader.uint32());
                    break;
                case 8:
                    message._all_group_list = $root.svr_to_client.all_group_list.decode(reader, reader.uint32());
                    break;
                case 9:
                    message._group_permission = $root.svr_to_client.group_permission.decode(reader, reader.uint32());
                    break;
                case 10:
                    message._all_project_list = $root.svr_to_client.all_project_list.decode(reader, reader.uint32());
                    break;
                case 11:
                    message._verification_code_ntf = $root.svr_to_client.verification_code_ntf.decode(reader, reader.uint32());
                    break;
                case 12:
                    message._project_repository = $root.svr_to_client.project_repository.decode(reader, reader.uint32());
                    break;
                case 13:
                    message._create_project_result = $root.svr_to_client.create_project_result.decode(reader, reader.uint32());
                    break;
                case 14:
                    message._create_repository_group = $root.svr_to_client.editor_repository_group.decode(reader, reader.uint32());
                    break;
                case 15:
                    message._delete_repository_group = $root.svr_to_client.editor_repository_group.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("_id"))
                throw $util.ProtocolError("missing required '_id'", { instance: message });
            return message;
        };

        /**
         * Decodes a svr_msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof svr_to_client.svr_msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {svr_to_client.svr_msg} svr_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        svr_msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a svr_msg message.
         * @function verify
         * @memberof svr_to_client.svr_msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        svr_msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message._id) {
            default:
                return "_id: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
                break;
            }
            if (message._status_code_ntf != null && message.hasOwnProperty("_status_code_ntf")) {
                var error = $root.svr_to_client.status_code_ntf.verify(message._status_code_ntf);
                if (error)
                    return "_status_code_ntf." + error;
            }
            if (message._user_token != null && message.hasOwnProperty("_user_token")) {
                var error = $root.svr_to_client.user_token.verify(message._user_token);
                if (error)
                    return "_user_token." + error;
            }
            if (message._root_permission != null && message.hasOwnProperty("_root_permission")) {
                var error = $root.svr_to_client.root_permission.verify(message._root_permission);
                if (error)
                    return "_root_permission." + error;
            }
            if (message._user_permission != null && message.hasOwnProperty("_user_permission")) {
                var error = $root.svr_to_client.user_permission.verify(message._user_permission);
                if (error)
                    return "_user_permission." + error;
            }
            if (message._project_member != null && message.hasOwnProperty("_project_member")) {
                var error = $root.svr_to_client.project_member.verify(message._project_member);
                if (error)
                    return "_project_member." + error;
            }
            if (message._group_member != null && message.hasOwnProperty("_group_member")) {
                var error = $root.svr_to_client.group_member.verify(message._group_member);
                if (error)
                    return "_group_member." + error;
            }
            if (message._all_group_list != null && message.hasOwnProperty("_all_group_list")) {
                var error = $root.svr_to_client.all_group_list.verify(message._all_group_list);
                if (error)
                    return "_all_group_list." + error;
            }
            if (message._group_permission != null && message.hasOwnProperty("_group_permission")) {
                var error = $root.svr_to_client.group_permission.verify(message._group_permission);
                if (error)
                    return "_group_permission." + error;
            }
            if (message._all_project_list != null && message.hasOwnProperty("_all_project_list")) {
                var error = $root.svr_to_client.all_project_list.verify(message._all_project_list);
                if (error)
                    return "_all_project_list." + error;
            }
            if (message._verification_code_ntf != null && message.hasOwnProperty("_verification_code_ntf")) {
                var error = $root.svr_to_client.verification_code_ntf.verify(message._verification_code_ntf);
                if (error)
                    return "_verification_code_ntf." + error;
            }
            if (message._project_repository != null && message.hasOwnProperty("_project_repository")) {
                var error = $root.svr_to_client.project_repository.verify(message._project_repository);
                if (error)
                    return "_project_repository." + error;
            }
            if (message._create_project_result != null && message.hasOwnProperty("_create_project_result")) {
                var error = $root.svr_to_client.create_project_result.verify(message._create_project_result);
                if (error)
                    return "_create_project_result." + error;
            }
            if (message._create_repository_group != null && message.hasOwnProperty("_create_repository_group")) {
                var error = $root.svr_to_client.editor_repository_group.verify(message._create_repository_group);
                if (error)
                    return "_create_repository_group." + error;
            }
            if (message._delete_repository_group != null && message.hasOwnProperty("_delete_repository_group")) {
                var error = $root.svr_to_client.editor_repository_group.verify(message._delete_repository_group);
                if (error)
                    return "_delete_repository_group." + error;
            }
            return null;
        };

        return svr_msg;
    })();

    return svr_to_client;
})();