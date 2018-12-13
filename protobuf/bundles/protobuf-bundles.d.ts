type Long = protobuf.Long;

/** Namespace client_to_svr. */
declare namespace client_to_svr {

    /** Properties of a get_verification_code. */
    interface Iget_verification_code {

        /** get_verification_code phone_num */
        phone_num: string;
    }

    /** Represents a get_verification_code. */
    class get_verification_code implements Iget_verification_code {

        /**
         * Constructs a new get_verification_code.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iget_verification_code);

        /** get_verification_code phone_num. */
        public phone_num: string;

        /**
         * Creates a new get_verification_code instance using the specified properties.
         * @param [properties] Properties to set
         * @returns get_verification_code instance
         */
        public static create(properties?: client_to_svr.Iget_verification_code): client_to_svr.get_verification_code;

        /**
         * Encodes the specified get_verification_code message. Does not implicitly {@link client_to_svr.get_verification_code.verify|verify} messages.
         * @param message get_verification_code message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iget_verification_code, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified get_verification_code message, length delimited. Does not implicitly {@link client_to_svr.get_verification_code.verify|verify} messages.
         * @param message get_verification_code message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iget_verification_code, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a get_verification_code message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns get_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.get_verification_code;

        /**
         * Decodes a get_verification_code message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns get_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.get_verification_code;

        /**
         * Verifies a get_verification_code message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a register_info. */
    interface Iregister_info {

        /** register_info email */
        email: string;

        /** register_info name */
        name: string;

        /** register_info passwnd */
        passwnd: string;

        /** register_info phone_num */
        phone_num: string;

        /** register_info verification_code */
        verification_code: string;
    }

    /** Represents a register_info. */
    class register_info implements Iregister_info {

        /**
         * Constructs a new register_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iregister_info);

        /** register_info email. */
        public email: string;

        /** register_info name. */
        public name: string;

        /** register_info passwnd. */
        public passwnd: string;

        /** register_info phone_num. */
        public phone_num: string;

        /** register_info verification_code. */
        public verification_code: string;

        /**
         * Creates a new register_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns register_info instance
         */
        public static create(properties?: client_to_svr.Iregister_info): client_to_svr.register_info;

        /**
         * Encodes the specified register_info message. Does not implicitly {@link client_to_svr.register_info.verify|verify} messages.
         * @param message register_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iregister_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified register_info message, length delimited. Does not implicitly {@link client_to_svr.register_info.verify|verify} messages.
         * @param message register_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iregister_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a register_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns register_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.register_info;

        /**
         * Decodes a register_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns register_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.register_info;

        /**
         * Verifies a register_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a user_login_info. */
    interface Iuser_login_info {

        /** user_login_info name */
        name: string;

        /** user_login_info passwnd */
        passwnd: string;
    }

    /** Represents a user_login_info. */
    class user_login_info implements Iuser_login_info {

        /**
         * Constructs a new user_login_info.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iuser_login_info);

        /** user_login_info name. */
        public name: string;

        /** user_login_info passwnd. */
        public passwnd: string;

        /**
         * Creates a new user_login_info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns user_login_info instance
         */
        public static create(properties?: client_to_svr.Iuser_login_info): client_to_svr.user_login_info;

        /**
         * Encodes the specified user_login_info message. Does not implicitly {@link client_to_svr.user_login_info.verify|verify} messages.
         * @param message user_login_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iuser_login_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified user_login_info message, length delimited. Does not implicitly {@link client_to_svr.user_login_info.verify|verify} messages.
         * @param message user_login_info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iuser_login_info, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a user_login_info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns user_login_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.user_login_info;

        /**
         * Decodes a user_login_info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns user_login_info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.user_login_info;

        /**
         * Verifies a user_login_info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a client_change_pwd. */
    interface Iclient_change_pwd {

        /** client_change_pwd old_pwd */
        old_pwd: string;

        /** client_change_pwd new_pwd */
        new_pwd: string;
    }

    /** Represents a client_change_pwd. */
    class client_change_pwd implements Iclient_change_pwd {

        /**
         * Constructs a new client_change_pwd.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iclient_change_pwd);

        /** client_change_pwd old_pwd. */
        public old_pwd: string;

        /** client_change_pwd new_pwd. */
        public new_pwd: string;

        /**
         * Creates a new client_change_pwd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns client_change_pwd instance
         */
        public static create(properties?: client_to_svr.Iclient_change_pwd): client_to_svr.client_change_pwd;

        /**
         * Encodes the specified client_change_pwd message. Does not implicitly {@link client_to_svr.client_change_pwd.verify|verify} messages.
         * @param message client_change_pwd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iclient_change_pwd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified client_change_pwd message, length delimited. Does not implicitly {@link client_to_svr.client_change_pwd.verify|verify} messages.
         * @param message client_change_pwd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iclient_change_pwd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a client_change_pwd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns client_change_pwd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.client_change_pwd;

        /**
         * Decodes a client_change_pwd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns client_change_pwd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.client_change_pwd;

        /**
         * Verifies a client_change_pwd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a create_project. */
    interface Icreate_project {

        /** create_project parent */
        parent: string;

        /** create_project project */
        project: string;
    }

    /** Represents a create_project. */
    class create_project implements Icreate_project {

        /**
         * Constructs a new create_project.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Icreate_project);

        /** create_project parent. */
        public parent: string;

        /** create_project project. */
        public project: string;

        /**
         * Creates a new create_project instance using the specified properties.
         * @param [properties] Properties to set
         * @returns create_project instance
         */
        public static create(properties?: client_to_svr.Icreate_project): client_to_svr.create_project;

        /**
         * Encodes the specified create_project message. Does not implicitly {@link client_to_svr.create_project.verify|verify} messages.
         * @param message create_project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Icreate_project, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified create_project message, length delimited. Does not implicitly {@link client_to_svr.create_project.verify|verify} messages.
         * @param message create_project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Icreate_project, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a create_project message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns create_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.create_project;

        /**
         * Decodes a create_project message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns create_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.create_project;

        /**
         * Verifies a create_project message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an add_group_into_project. */
    interface Iadd_group_into_project {

        /** add_group_into_project parent */
        parent: string;

        /** add_group_into_project project */
        project: string;

        /** add_group_into_project group */
        group: string;
    }

    /** Represents an add_group_into_project. */
    class add_group_into_project implements Iadd_group_into_project {

        /**
         * Constructs a new add_group_into_project.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iadd_group_into_project);

        /** add_group_into_project parent. */
        public parent: string;

        /** add_group_into_project project. */
        public project: string;

        /** add_group_into_project group. */
        public group: string;

        /**
         * Creates a new add_group_into_project instance using the specified properties.
         * @param [properties] Properties to set
         * @returns add_group_into_project instance
         */
        public static create(properties?: client_to_svr.Iadd_group_into_project): client_to_svr.add_group_into_project;

        /**
         * Encodes the specified add_group_into_project message. Does not implicitly {@link client_to_svr.add_group_into_project.verify|verify} messages.
         * @param message add_group_into_project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iadd_group_into_project, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified add_group_into_project message, length delimited. Does not implicitly {@link client_to_svr.add_group_into_project.verify|verify} messages.
         * @param message add_group_into_project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iadd_group_into_project, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an add_group_into_project message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns add_group_into_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.add_group_into_project;

        /**
         * Decodes an add_group_into_project message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns add_group_into_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.add_group_into_project;

        /**
         * Verifies an add_group_into_project message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a remove_group_from_project. */
    interface Iremove_group_from_project {

        /** remove_group_from_project parent */
        parent: string;

        /** remove_group_from_project project */
        project: string;

        /** remove_group_from_project group */
        group: string;
    }

    /** Represents a remove_group_from_project. */
    class remove_group_from_project implements Iremove_group_from_project {

        /**
         * Constructs a new remove_group_from_project.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iremove_group_from_project);

        /** remove_group_from_project parent. */
        public parent: string;

        /** remove_group_from_project project. */
        public project: string;

        /** remove_group_from_project group. */
        public group: string;

        /**
         * Creates a new remove_group_from_project instance using the specified properties.
         * @param [properties] Properties to set
         * @returns remove_group_from_project instance
         */
        public static create(properties?: client_to_svr.Iremove_group_from_project): client_to_svr.remove_group_from_project;

        /**
         * Encodes the specified remove_group_from_project message. Does not implicitly {@link client_to_svr.remove_group_from_project.verify|verify} messages.
         * @param message remove_group_from_project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iremove_group_from_project, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified remove_group_from_project message, length delimited. Does not implicitly {@link client_to_svr.remove_group_from_project.verify|verify} messages.
         * @param message remove_group_from_project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iremove_group_from_project, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a remove_group_from_project message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns remove_group_from_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.remove_group_from_project;

        /**
         * Decodes a remove_group_from_project message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns remove_group_from_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.remove_group_from_project;

        /**
         * Verifies a remove_group_from_project message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an add_user_into_project. */
    interface Iadd_user_into_project {

        /** add_user_into_project parent */
        parent: string;

        /** add_user_into_project project */
        project: string;

        /** add_user_into_project name */
        name: string;
    }

    /** Represents an add_user_into_project. */
    class add_user_into_project implements Iadd_user_into_project {

        /**
         * Constructs a new add_user_into_project.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iadd_user_into_project);

        /** add_user_into_project parent. */
        public parent: string;

        /** add_user_into_project project. */
        public project: string;

        /** add_user_into_project name. */
        public name: string;

        /**
         * Creates a new add_user_into_project instance using the specified properties.
         * @param [properties] Properties to set
         * @returns add_user_into_project instance
         */
        public static create(properties?: client_to_svr.Iadd_user_into_project): client_to_svr.add_user_into_project;

        /**
         * Encodes the specified add_user_into_project message. Does not implicitly {@link client_to_svr.add_user_into_project.verify|verify} messages.
         * @param message add_user_into_project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iadd_user_into_project, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified add_user_into_project message, length delimited. Does not implicitly {@link client_to_svr.add_user_into_project.verify|verify} messages.
         * @param message add_user_into_project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iadd_user_into_project, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an add_user_into_project message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns add_user_into_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.add_user_into_project;

        /**
         * Decodes an add_user_into_project message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns add_user_into_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.add_user_into_project;

        /**
         * Verifies an add_user_into_project message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a remove_user_from_project. */
    interface Iremove_user_from_project {

        /** remove_user_from_project parent */
        parent: string;

        /** remove_user_from_project project */
        project: string;

        /** remove_user_from_project name */
        name: string;
    }

    /** Represents a remove_user_from_project. */
    class remove_user_from_project implements Iremove_user_from_project {

        /**
         * Constructs a new remove_user_from_project.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iremove_user_from_project);

        /** remove_user_from_project parent. */
        public parent: string;

        /** remove_user_from_project project. */
        public project: string;

        /** remove_user_from_project name. */
        public name: string;

        /**
         * Creates a new remove_user_from_project instance using the specified properties.
         * @param [properties] Properties to set
         * @returns remove_user_from_project instance
         */
        public static create(properties?: client_to_svr.Iremove_user_from_project): client_to_svr.remove_user_from_project;

        /**
         * Encodes the specified remove_user_from_project message. Does not implicitly {@link client_to_svr.remove_user_from_project.verify|verify} messages.
         * @param message remove_user_from_project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iremove_user_from_project, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified remove_user_from_project message, length delimited. Does not implicitly {@link client_to_svr.remove_user_from_project.verify|verify} messages.
         * @param message remove_user_from_project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iremove_user_from_project, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a remove_user_from_project message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns remove_user_from_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.remove_user_from_project;

        /**
         * Decodes a remove_user_from_project message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns remove_user_from_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.remove_user_from_project;

        /**
         * Verifies a remove_user_from_project message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a create_group. */
    interface Icreate_group {

        /** create_group group */
        group: string;
    }

    /** Represents a create_group. */
    class create_group implements Icreate_group {

        /**
         * Constructs a new create_group.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Icreate_group);

        /** create_group group. */
        public group: string;

        /**
         * Creates a new create_group instance using the specified properties.
         * @param [properties] Properties to set
         * @returns create_group instance
         */
        public static create(properties?: client_to_svr.Icreate_group): client_to_svr.create_group;

        /**
         * Encodes the specified create_group message. Does not implicitly {@link client_to_svr.create_group.verify|verify} messages.
         * @param message create_group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Icreate_group, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified create_group message, length delimited. Does not implicitly {@link client_to_svr.create_group.verify|verify} messages.
         * @param message create_group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Icreate_group, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a create_group message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns create_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.create_group;

        /**
         * Decodes a create_group message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns create_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.create_group;

        /**
         * Verifies a create_group message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an add_user_into_group. */
    interface Iadd_user_into_group {

        /** add_user_into_group group */
        group: string;

        /** add_user_into_group name */
        name: string;
    }

    /** Represents an add_user_into_group. */
    class add_user_into_group implements Iadd_user_into_group {

        /**
         * Constructs a new add_user_into_group.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iadd_user_into_group);

        /** add_user_into_group group. */
        public group: string;

        /** add_user_into_group name. */
        public name: string;

        /**
         * Creates a new add_user_into_group instance using the specified properties.
         * @param [properties] Properties to set
         * @returns add_user_into_group instance
         */
        public static create(properties?: client_to_svr.Iadd_user_into_group): client_to_svr.add_user_into_group;

        /**
         * Encodes the specified add_user_into_group message. Does not implicitly {@link client_to_svr.add_user_into_group.verify|verify} messages.
         * @param message add_user_into_group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iadd_user_into_group, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified add_user_into_group message, length delimited. Does not implicitly {@link client_to_svr.add_user_into_group.verify|verify} messages.
         * @param message add_user_into_group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iadd_user_into_group, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an add_user_into_group message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns add_user_into_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.add_user_into_group;

        /**
         * Decodes an add_user_into_group message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns add_user_into_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.add_user_into_group;

        /**
         * Verifies an add_user_into_group message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a remove_user_from_group. */
    interface Iremove_user_from_group {

        /** remove_user_from_group group */
        group: string;

        /** remove_user_from_group name */
        name: string;
    }

    /** Represents a remove_user_from_group. */
    class remove_user_from_group implements Iremove_user_from_group {

        /**
         * Constructs a new remove_user_from_group.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iremove_user_from_group);

        /** remove_user_from_group group. */
        public group: string;

        /** remove_user_from_group name. */
        public name: string;

        /**
         * Creates a new remove_user_from_group instance using the specified properties.
         * @param [properties] Properties to set
         * @returns remove_user_from_group instance
         */
        public static create(properties?: client_to_svr.Iremove_user_from_group): client_to_svr.remove_user_from_group;

        /**
         * Encodes the specified remove_user_from_group message. Does not implicitly {@link client_to_svr.remove_user_from_group.verify|verify} messages.
         * @param message remove_user_from_group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iremove_user_from_group, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified remove_user_from_group message, length delimited. Does not implicitly {@link client_to_svr.remove_user_from_group.verify|verify} messages.
         * @param message remove_user_from_group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iremove_user_from_group, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a remove_user_from_group message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns remove_user_from_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.remove_user_from_group;

        /**
         * Decodes a remove_user_from_group message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns remove_user_from_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.remove_user_from_group;

        /**
         * Verifies a remove_user_from_group message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a set_user_project_permission. */
    interface Iset_user_project_permission {

        /** set_user_project_permission name */
        name: string;

        /** set_user_project_permission parent */
        parent: string;

        /** set_user_project_permission project */
        project: string;

        /** set_user_project_permission permission */
        permission?: (common.permission_type[]|null);
    }

    /** Represents a set_user_project_permission. */
    class set_user_project_permission implements Iset_user_project_permission {

        /**
         * Constructs a new set_user_project_permission.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iset_user_project_permission);

        /** set_user_project_permission name. */
        public name: string;

        /** set_user_project_permission parent. */
        public parent: string;

        /** set_user_project_permission project. */
        public project: string;

        /** set_user_project_permission permission. */
        public permission: common.permission_type[];

        /**
         * Creates a new set_user_project_permission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns set_user_project_permission instance
         */
        public static create(properties?: client_to_svr.Iset_user_project_permission): client_to_svr.set_user_project_permission;

        /**
         * Encodes the specified set_user_project_permission message. Does not implicitly {@link client_to_svr.set_user_project_permission.verify|verify} messages.
         * @param message set_user_project_permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iset_user_project_permission, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified set_user_project_permission message, length delimited. Does not implicitly {@link client_to_svr.set_user_project_permission.verify|verify} messages.
         * @param message set_user_project_permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iset_user_project_permission, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a set_user_project_permission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns set_user_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.set_user_project_permission;

        /**
         * Decodes a set_user_project_permission message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns set_user_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.set_user_project_permission;

        /**
         * Verifies a set_user_project_permission message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a set_group_project_permission. */
    interface Iset_group_project_permission {

        /** set_group_project_permission group */
        group: string;

        /** set_group_project_permission parent */
        parent: string;

        /** set_group_project_permission project */
        project: string;

        /** set_group_project_permission permission */
        permission?: (common.permission_type[]|null);
    }

    /** Represents a set_group_project_permission. */
    class set_group_project_permission implements Iset_group_project_permission {

        /**
         * Constructs a new set_group_project_permission.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iset_group_project_permission);

        /** set_group_project_permission group. */
        public group: string;

        /** set_group_project_permission parent. */
        public parent: string;

        /** set_group_project_permission project. */
        public project: string;

        /** set_group_project_permission permission. */
        public permission: common.permission_type[];

        /**
         * Creates a new set_group_project_permission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns set_group_project_permission instance
         */
        public static create(properties?: client_to_svr.Iset_group_project_permission): client_to_svr.set_group_project_permission;

        /**
         * Encodes the specified set_group_project_permission message. Does not implicitly {@link client_to_svr.set_group_project_permission.verify|verify} messages.
         * @param message set_group_project_permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iset_group_project_permission, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified set_group_project_permission message, length delimited. Does not implicitly {@link client_to_svr.set_group_project_permission.verify|verify} messages.
         * @param message set_group_project_permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iset_group_project_permission, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a set_group_project_permission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns set_group_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.set_group_project_permission;

        /**
         * Decodes a set_group_project_permission message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns set_group_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.set_group_project_permission;

        /**
         * Verifies a set_group_project_permission message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a get_project_member. */
    interface Iget_project_member {

        /** get_project_member parent */
        parent: string;

        /** get_project_member project */
        project: string;
    }

    /** Represents a get_project_member. */
    class get_project_member implements Iget_project_member {

        /**
         * Constructs a new get_project_member.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iget_project_member);

        /** get_project_member parent. */
        public parent: string;

        /** get_project_member project. */
        public project: string;

        /**
         * Creates a new get_project_member instance using the specified properties.
         * @param [properties] Properties to set
         * @returns get_project_member instance
         */
        public static create(properties?: client_to_svr.Iget_project_member): client_to_svr.get_project_member;

        /**
         * Encodes the specified get_project_member message. Does not implicitly {@link client_to_svr.get_project_member.verify|verify} messages.
         * @param message get_project_member message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iget_project_member, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified get_project_member message, length delimited. Does not implicitly {@link client_to_svr.get_project_member.verify|verify} messages.
         * @param message get_project_member message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iget_project_member, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a get_project_member message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns get_project_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.get_project_member;

        /**
         * Decodes a get_project_member message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns get_project_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.get_project_member;

        /**
         * Verifies a get_project_member message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a get_group_member. */
    interface Iget_group_member {

        /** get_group_member group */
        group: string;
    }

    /** Represents a get_group_member. */
    class get_group_member implements Iget_group_member {

        /**
         * Constructs a new get_group_member.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iget_group_member);

        /** get_group_member group. */
        public group: string;

        /**
         * Creates a new get_group_member instance using the specified properties.
         * @param [properties] Properties to set
         * @returns get_group_member instance
         */
        public static create(properties?: client_to_svr.Iget_group_member): client_to_svr.get_group_member;

        /**
         * Encodes the specified get_group_member message. Does not implicitly {@link client_to_svr.get_group_member.verify|verify} messages.
         * @param message get_group_member message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iget_group_member, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified get_group_member message, length delimited. Does not implicitly {@link client_to_svr.get_group_member.verify|verify} messages.
         * @param message get_group_member message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iget_group_member, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a get_group_member message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns get_group_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.get_group_member;

        /**
         * Decodes a get_group_member message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns get_group_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.get_group_member;

        /**
         * Verifies a get_group_member message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a get_user_project_permission. */
    interface Iget_user_project_permission {

        /** get_user_project_permission name */
        name: string;

        /** get_user_project_permission parent */
        parent: string;

        /** get_user_project_permission project */
        project: string;
    }

    /** Represents a get_user_project_permission. */
    class get_user_project_permission implements Iget_user_project_permission {

        /**
         * Constructs a new get_user_project_permission.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iget_user_project_permission);

        /** get_user_project_permission name. */
        public name: string;

        /** get_user_project_permission parent. */
        public parent: string;

        /** get_user_project_permission project. */
        public project: string;

        /**
         * Creates a new get_user_project_permission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns get_user_project_permission instance
         */
        public static create(properties?: client_to_svr.Iget_user_project_permission): client_to_svr.get_user_project_permission;

        /**
         * Encodes the specified get_user_project_permission message. Does not implicitly {@link client_to_svr.get_user_project_permission.verify|verify} messages.
         * @param message get_user_project_permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iget_user_project_permission, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified get_user_project_permission message, length delimited. Does not implicitly {@link client_to_svr.get_user_project_permission.verify|verify} messages.
         * @param message get_user_project_permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iget_user_project_permission, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a get_user_project_permission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns get_user_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.get_user_project_permission;

        /**
         * Decodes a get_user_project_permission message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns get_user_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.get_user_project_permission;

        /**
         * Verifies a get_user_project_permission message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a get_group_project_permission. */
    interface Iget_group_project_permission {

        /** get_group_project_permission group */
        group: string;

        /** get_group_project_permission parent */
        parent: string;

        /** get_group_project_permission project */
        project: string;
    }

    /** Represents a get_group_project_permission. */
    class get_group_project_permission implements Iget_group_project_permission {

        /**
         * Constructs a new get_group_project_permission.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iget_group_project_permission);

        /** get_group_project_permission group. */
        public group: string;

        /** get_group_project_permission parent. */
        public parent: string;

        /** get_group_project_permission project. */
        public project: string;

        /**
         * Creates a new get_group_project_permission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns get_group_project_permission instance
         */
        public static create(properties?: client_to_svr.Iget_group_project_permission): client_to_svr.get_group_project_permission;

        /**
         * Encodes the specified get_group_project_permission message. Does not implicitly {@link client_to_svr.get_group_project_permission.verify|verify} messages.
         * @param message get_group_project_permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iget_group_project_permission, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified get_group_project_permission message, length delimited. Does not implicitly {@link client_to_svr.get_group_project_permission.verify|verify} messages.
         * @param message get_group_project_permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iget_group_project_permission, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a get_group_project_permission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns get_group_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.get_group_project_permission;

        /**
         * Decodes a get_group_project_permission message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns get_group_project_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.get_group_project_permission;

        /**
         * Verifies a get_group_project_permission message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a get_all_project. */
    interface Iget_all_project {
    }

    /** Represents a get_all_project. */
    class get_all_project implements Iget_all_project {

        /**
         * Constructs a new get_all_project.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iget_all_project);

        /**
         * Creates a new get_all_project instance using the specified properties.
         * @param [properties] Properties to set
         * @returns get_all_project instance
         */
        public static create(properties?: client_to_svr.Iget_all_project): client_to_svr.get_all_project;

        /**
         * Encodes the specified get_all_project message. Does not implicitly {@link client_to_svr.get_all_project.verify|verify} messages.
         * @param message get_all_project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iget_all_project, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified get_all_project message, length delimited. Does not implicitly {@link client_to_svr.get_all_project.verify|verify} messages.
         * @param message get_all_project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iget_all_project, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a get_all_project message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns get_all_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.get_all_project;

        /**
         * Decodes a get_all_project message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns get_all_project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.get_all_project;

        /**
         * Verifies a get_all_project message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a get_all_group. */
    interface Iget_all_group {
    }

    /** Represents a get_all_group. */
    class get_all_group implements Iget_all_group {

        /**
         * Constructs a new get_all_group.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iget_all_group);

        /**
         * Creates a new get_all_group instance using the specified properties.
         * @param [properties] Properties to set
         * @returns get_all_group instance
         */
        public static create(properties?: client_to_svr.Iget_all_group): client_to_svr.get_all_group;

        /**
         * Encodes the specified get_all_group message. Does not implicitly {@link client_to_svr.get_all_group.verify|verify} messages.
         * @param message get_all_group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iget_all_group, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified get_all_group message, length delimited. Does not implicitly {@link client_to_svr.get_all_group.verify|verify} messages.
         * @param message get_all_group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iget_all_group, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a get_all_group message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns get_all_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.get_all_group;

        /**
         * Decodes a get_all_group message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns get_all_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.get_all_group;

        /**
         * Verifies a get_all_group message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a confirm_verification_code. */
    interface Iconfirm_verification_code {

        /** confirm_verification_code verification_code */
        verification_code: string;
    }

    /** Represents a confirm_verification_code. */
    class confirm_verification_code implements Iconfirm_verification_code {

        /**
         * Constructs a new confirm_verification_code.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iconfirm_verification_code);

        /** confirm_verification_code verification_code. */
        public verification_code: string;

        /**
         * Creates a new confirm_verification_code instance using the specified properties.
         * @param [properties] Properties to set
         * @returns confirm_verification_code instance
         */
        public static create(properties?: client_to_svr.Iconfirm_verification_code): client_to_svr.confirm_verification_code;

        /**
         * Encodes the specified confirm_verification_code message. Does not implicitly {@link client_to_svr.confirm_verification_code.verify|verify} messages.
         * @param message confirm_verification_code message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iconfirm_verification_code, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified confirm_verification_code message, length delimited. Does not implicitly {@link client_to_svr.confirm_verification_code.verify|verify} messages.
         * @param message confirm_verification_code message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iconfirm_verification_code, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a confirm_verification_code message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns confirm_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.confirm_verification_code;

        /**
         * Decodes a confirm_verification_code message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns confirm_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.confirm_verification_code;

        /**
         * Verifies a confirm_verification_code message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a restore_passwnd. */
    interface Irestore_passwnd {

        /** restore_passwnd passwnd */
        passwnd: string;
    }

    /** Represents a restore_passwnd. */
    class restore_passwnd implements Irestore_passwnd {

        /**
         * Constructs a new restore_passwnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Irestore_passwnd);

        /** restore_passwnd passwnd. */
        public passwnd: string;

        /**
         * Creates a new restore_passwnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns restore_passwnd instance
         */
        public static create(properties?: client_to_svr.Irestore_passwnd): client_to_svr.restore_passwnd;

        /**
         * Encodes the specified restore_passwnd message. Does not implicitly {@link client_to_svr.restore_passwnd.verify|verify} messages.
         * @param message restore_passwnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Irestore_passwnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified restore_passwnd message, length delimited. Does not implicitly {@link client_to_svr.restore_passwnd.verify|verify} messages.
         * @param message restore_passwnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Irestore_passwnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a restore_passwnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns restore_passwnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.restore_passwnd;

        /**
         * Decodes a restore_passwnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns restore_passwnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.restore_passwnd;

        /**
         * Verifies a restore_passwnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a confirm_mail_verification_code. */
    interface Iconfirm_mail_verification_code {

        /** confirm_mail_verification_code mail */
        mail: string;
    }

    /** Represents a confirm_mail_verification_code. */
    class confirm_mail_verification_code implements Iconfirm_mail_verification_code {

        /**
         * Constructs a new confirm_mail_verification_code.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iconfirm_mail_verification_code);

        /** confirm_mail_verification_code mail. */
        public mail: string;

        /**
         * Creates a new confirm_mail_verification_code instance using the specified properties.
         * @param [properties] Properties to set
         * @returns confirm_mail_verification_code instance
         */
        public static create(properties?: client_to_svr.Iconfirm_mail_verification_code): client_to_svr.confirm_mail_verification_code;

        /**
         * Encodes the specified confirm_mail_verification_code message. Does not implicitly {@link client_to_svr.confirm_mail_verification_code.verify|verify} messages.
         * @param message confirm_mail_verification_code message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iconfirm_mail_verification_code, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified confirm_mail_verification_code message, length delimited. Does not implicitly {@link client_to_svr.confirm_mail_verification_code.verify|verify} messages.
         * @param message confirm_mail_verification_code message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iconfirm_mail_verification_code, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a confirm_mail_verification_code message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns confirm_mail_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.confirm_mail_verification_code;

        /**
         * Decodes a confirm_mail_verification_code message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns confirm_mail_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.confirm_mail_verification_code;

        /**
         * Verifies a confirm_mail_verification_code message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a confirm_phone_verification_code. */
    interface Iconfirm_phone_verification_code {

        /** confirm_phone_verification_code phone */
        phone: string;
    }

    /** Represents a confirm_phone_verification_code. */
    class confirm_phone_verification_code implements Iconfirm_phone_verification_code {

        /**
         * Constructs a new confirm_phone_verification_code.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iconfirm_phone_verification_code);

        /** confirm_phone_verification_code phone. */
        public phone: string;

        /**
         * Creates a new confirm_phone_verification_code instance using the specified properties.
         * @param [properties] Properties to set
         * @returns confirm_phone_verification_code instance
         */
        public static create(properties?: client_to_svr.Iconfirm_phone_verification_code): client_to_svr.confirm_phone_verification_code;

        /**
         * Encodes the specified confirm_phone_verification_code message. Does not implicitly {@link client_to_svr.confirm_phone_verification_code.verify|verify} messages.
         * @param message confirm_phone_verification_code message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iconfirm_phone_verification_code, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified confirm_phone_verification_code message, length delimited. Does not implicitly {@link client_to_svr.confirm_phone_verification_code.verify|verify} messages.
         * @param message confirm_phone_verification_code message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iconfirm_phone_verification_code, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a confirm_phone_verification_code message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns confirm_phone_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.confirm_phone_verification_code;

        /**
         * Decodes a confirm_phone_verification_code message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns confirm_phone_verification_code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.confirm_phone_verification_code;

        /**
         * Verifies a confirm_phone_verification_code message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a root_add_user_peas. */
    interface Iroot_add_user_peas {

        /** root_add_user_peas target_name */
        target_name: string;

        /** root_add_user_peas add_peas_num */
        add_peas_num: number;
    }

    /** Represents a root_add_user_peas. */
    class root_add_user_peas implements Iroot_add_user_peas {

        /**
         * Constructs a new root_add_user_peas.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iroot_add_user_peas);

        /** root_add_user_peas target_name. */
        public target_name: string;

        /** root_add_user_peas add_peas_num. */
        public add_peas_num: number;

        /**
         * Creates a new root_add_user_peas instance using the specified properties.
         * @param [properties] Properties to set
         * @returns root_add_user_peas instance
         */
        public static create(properties?: client_to_svr.Iroot_add_user_peas): client_to_svr.root_add_user_peas;

        /**
         * Encodes the specified root_add_user_peas message. Does not implicitly {@link client_to_svr.root_add_user_peas.verify|verify} messages.
         * @param message root_add_user_peas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iroot_add_user_peas, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified root_add_user_peas message, length delimited. Does not implicitly {@link client_to_svr.root_add_user_peas.verify|verify} messages.
         * @param message root_add_user_peas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iroot_add_user_peas, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a root_add_user_peas message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns root_add_user_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.root_add_user_peas;

        /**
         * Decodes a root_add_user_peas message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns root_add_user_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.root_add_user_peas;

        /**
         * Verifies a root_add_user_peas message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a manger_alloc_peas. */
    interface Imanger_alloc_peas {

        /** manger_alloc_peas target_name */
        target_name: string;

        /** manger_alloc_peas add_peas_num */
        add_peas_num: number;
    }

    /** Represents a manger_alloc_peas. */
    class manger_alloc_peas implements Imanger_alloc_peas {

        /**
         * Constructs a new manger_alloc_peas.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Imanger_alloc_peas);

        /** manger_alloc_peas target_name. */
        public target_name: string;

        /** manger_alloc_peas add_peas_num. */
        public add_peas_num: number;

        /**
         * Creates a new manger_alloc_peas instance using the specified properties.
         * @param [properties] Properties to set
         * @returns manger_alloc_peas instance
         */
        public static create(properties?: client_to_svr.Imanger_alloc_peas): client_to_svr.manger_alloc_peas;

        /**
         * Encodes the specified manger_alloc_peas message. Does not implicitly {@link client_to_svr.manger_alloc_peas.verify|verify} messages.
         * @param message manger_alloc_peas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Imanger_alloc_peas, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified manger_alloc_peas message, length delimited. Does not implicitly {@link client_to_svr.manger_alloc_peas.verify|verify} messages.
         * @param message manger_alloc_peas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Imanger_alloc_peas, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a manger_alloc_peas message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns manger_alloc_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.manger_alloc_peas;

        /**
         * Decodes a manger_alloc_peas message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns manger_alloc_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.manger_alloc_peas;

        /**
         * Verifies a manger_alloc_peas message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a root_add_group_peas. */
    interface Iroot_add_group_peas {

        /** root_add_group_peas group */
        group: string;

        /** root_add_group_peas add_peas_num */
        add_peas_num: number;
    }

    /** Represents a root_add_group_peas. */
    class root_add_group_peas implements Iroot_add_group_peas {

        /**
         * Constructs a new root_add_group_peas.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iroot_add_group_peas);

        /** root_add_group_peas group. */
        public group: string;

        /** root_add_group_peas add_peas_num. */
        public add_peas_num: number;

        /**
         * Creates a new root_add_group_peas instance using the specified properties.
         * @param [properties] Properties to set
         * @returns root_add_group_peas instance
         */
        public static create(properties?: client_to_svr.Iroot_add_group_peas): client_to_svr.root_add_group_peas;

        /**
         * Encodes the specified root_add_group_peas message. Does not implicitly {@link client_to_svr.root_add_group_peas.verify|verify} messages.
         * @param message root_add_group_peas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iroot_add_group_peas, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified root_add_group_peas message, length delimited. Does not implicitly {@link client_to_svr.root_add_group_peas.verify|verify} messages.
         * @param message root_add_group_peas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iroot_add_group_peas, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a root_add_group_peas message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns root_add_group_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.root_add_group_peas;

        /**
         * Decodes a root_add_group_peas message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns root_add_group_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.root_add_group_peas;

        /**
         * Verifies a root_add_group_peas message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a root_add_project_peas. */
    interface Iroot_add_project_peas {

        /** root_add_project_peas parent */
        parent: string;

        /** root_add_project_peas project */
        project: string;

        /** root_add_project_peas add_peas_num */
        add_peas_num: number;
    }

    /** Represents a root_add_project_peas. */
    class root_add_project_peas implements Iroot_add_project_peas {

        /**
         * Constructs a new root_add_project_peas.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iroot_add_project_peas);

        /** root_add_project_peas parent. */
        public parent: string;

        /** root_add_project_peas project. */
        public project: string;

        /** root_add_project_peas add_peas_num. */
        public add_peas_num: number;

        /**
         * Creates a new root_add_project_peas instance using the specified properties.
         * @param [properties] Properties to set
         * @returns root_add_project_peas instance
         */
        public static create(properties?: client_to_svr.Iroot_add_project_peas): client_to_svr.root_add_project_peas;

        /**
         * Encodes the specified root_add_project_peas message. Does not implicitly {@link client_to_svr.root_add_project_peas.verify|verify} messages.
         * @param message root_add_project_peas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iroot_add_project_peas, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified root_add_project_peas message, length delimited. Does not implicitly {@link client_to_svr.root_add_project_peas.verify|verify} messages.
         * @param message root_add_project_peas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iroot_add_project_peas, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a root_add_project_peas message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns root_add_project_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.root_add_project_peas;

        /**
         * Decodes a root_add_project_peas message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns root_add_project_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.root_add_project_peas;

        /**
         * Verifies a root_add_project_peas message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a set_group_replace_peas. */
    interface Iset_group_replace_peas {

        /** set_group_replace_peas group */
        group: string;

        /** set_group_replace_peas pay_for_sd */
        pay_for_sd: boolean;
    }

    /** Represents a set_group_replace_peas. */
    class set_group_replace_peas implements Iset_group_replace_peas {

        /**
         * Constructs a new set_group_replace_peas.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iset_group_replace_peas);

        /** set_group_replace_peas group. */
        public group: string;

        /** set_group_replace_peas pay_for_sd. */
        public pay_for_sd: boolean;

        /**
         * Creates a new set_group_replace_peas instance using the specified properties.
         * @param [properties] Properties to set
         * @returns set_group_replace_peas instance
         */
        public static create(properties?: client_to_svr.Iset_group_replace_peas): client_to_svr.set_group_replace_peas;

        /**
         * Encodes the specified set_group_replace_peas message. Does not implicitly {@link client_to_svr.set_group_replace_peas.verify|verify} messages.
         * @param message set_group_replace_peas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iset_group_replace_peas, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified set_group_replace_peas message, length delimited. Does not implicitly {@link client_to_svr.set_group_replace_peas.verify|verify} messages.
         * @param message set_group_replace_peas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iset_group_replace_peas, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a set_group_replace_peas message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns set_group_replace_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.set_group_replace_peas;

        /**
         * Decodes a set_group_replace_peas message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns set_group_replace_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.set_group_replace_peas;

        /**
         * Verifies a set_group_replace_peas message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a set_project_replace_peas. */
    interface Iset_project_replace_peas {

        /** set_project_replace_peas project */
        project: string;

        /** set_project_replace_peas pay_for_sd */
        pay_for_sd: boolean;
    }

    /** Represents a set_project_replace_peas. */
    class set_project_replace_peas implements Iset_project_replace_peas {

        /**
         * Constructs a new set_project_replace_peas.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iset_project_replace_peas);

        /** set_project_replace_peas project. */
        public project: string;

        /** set_project_replace_peas pay_for_sd. */
        public pay_for_sd: boolean;

        /**
         * Creates a new set_project_replace_peas instance using the specified properties.
         * @param [properties] Properties to set
         * @returns set_project_replace_peas instance
         */
        public static create(properties?: client_to_svr.Iset_project_replace_peas): client_to_svr.set_project_replace_peas;

        /**
         * Encodes the specified set_project_replace_peas message. Does not implicitly {@link client_to_svr.set_project_replace_peas.verify|verify} messages.
         * @param message set_project_replace_peas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iset_project_replace_peas, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified set_project_replace_peas message, length delimited. Does not implicitly {@link client_to_svr.set_project_replace_peas.verify|verify} messages.
         * @param message set_project_replace_peas message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iset_project_replace_peas, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a set_project_replace_peas message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns set_project_replace_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.set_project_replace_peas;

        /**
         * Decodes a set_project_replace_peas message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns set_project_replace_peas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.set_project_replace_peas;

        /**
         * Verifies a set_project_replace_peas message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an editor_repository_group. */
    interface Ieditor_repository_group {

        /** editor_repository_group project */
        project: string;

        /** editor_repository_group sub_project */
        sub_project: string;

        /** editor_repository_group parent */
        parent: string;

        /** editor_repository_group name */
        name: string;

        /** editor_repository_group repository_type */
        repository_type: common.repository_type;
    }

    /** Represents an editor_repository_group. */
    class editor_repository_group implements Ieditor_repository_group {

        /**
         * Constructs a new editor_repository_group.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Ieditor_repository_group);

        /** editor_repository_group project. */
        public project: string;

        /** editor_repository_group sub_project. */
        public sub_project: string;

        /** editor_repository_group parent. */
        public parent: string;

        /** editor_repository_group name. */
        public name: string;

        /** editor_repository_group repository_type. */
        public repository_type: common.repository_type;

        /**
         * Creates a new editor_repository_group instance using the specified properties.
         * @param [properties] Properties to set
         * @returns editor_repository_group instance
         */
        public static create(properties?: client_to_svr.Ieditor_repository_group): client_to_svr.editor_repository_group;

        /**
         * Encodes the specified editor_repository_group message. Does not implicitly {@link client_to_svr.editor_repository_group.verify|verify} messages.
         * @param message editor_repository_group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Ieditor_repository_group, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified editor_repository_group message, length delimited. Does not implicitly {@link client_to_svr.editor_repository_group.verify|verify} messages.
         * @param message editor_repository_group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Ieditor_repository_group, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an editor_repository_group message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns editor_repository_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.editor_repository_group;

        /**
         * Decodes an editor_repository_group message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns editor_repository_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.editor_repository_group;

        /**
         * Verifies an editor_repository_group message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a get_project_repository. */
    interface Iget_project_repository {

        /** get_project_repository project */
        project: string;

        /** get_project_repository sub_project */
        sub_project: string;

        /** get_project_repository repository_type */
        repository_type: common.repository_type;
    }

    /** Represents a get_project_repository. */
    class get_project_repository implements Iget_project_repository {

        /**
         * Constructs a new get_project_repository.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iget_project_repository);

        /** get_project_repository project. */
        public project: string;

        /** get_project_repository sub_project. */
        public sub_project: string;

        /** get_project_repository repository_type. */
        public repository_type: common.repository_type;

        /**
         * Creates a new get_project_repository instance using the specified properties.
         * @param [properties] Properties to set
         * @returns get_project_repository instance
         */
        public static create(properties?: client_to_svr.Iget_project_repository): client_to_svr.get_project_repository;

        /**
         * Encodes the specified get_project_repository message. Does not implicitly {@link client_to_svr.get_project_repository.verify|verify} messages.
         * @param message get_project_repository message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iget_project_repository, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified get_project_repository message, length delimited. Does not implicitly {@link client_to_svr.get_project_repository.verify|verify} messages.
         * @param message get_project_repository message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iget_project_repository, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a get_project_repository message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns get_project_repository
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.get_project_repository;

        /**
         * Decodes a get_project_repository message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns get_project_repository
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.get_project_repository;

        /**
         * Verifies a get_project_repository message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** client_msg_id enum. */
    enum client_msg_id {
        user_register_id = 1,
        user_login_id = 2,
        client_change_pwd_id = 3,
        create_project_id = 4,
        add_group_into_project_id = 5,
        remove_group_from_project_id = 6,
        add_user_into_project_id = 7,
        remove_user_from_project_id = 8,
        create_group_id = 9,
        add_user_into_group_id = 10,
        remove_user_from_group_id = 11,
        set_user_project_permission_id = 12,
        set_group_project_permission_id = 13,
        get_project_member_id = 14,
        get_group_member_id = 15,
        get_user_project_permission_id = 16,
        get_group_project_permission_id = 17,
        get_all_project_id = 18,
        get_all_group_id = 19,
        get_verification_code_id = 20,
        restore_passwnd_id = 21,
        confirm_verification_code_id = 22,
        confirm_mail_verification_code_id = 23,
        confirm_phone_verification_code_id = 24,
        root_add_user_peas_id = 25,
        manger_alloc_peas_id = 26,
        root_add_group_peas_id = 27,
        root_add_project_peas_id = 28,
        set_group_replace_peas_id = 29,
        set_project_replace_peas_id = 30,
        add_repository_group_id = 31,
        get_project_repository_id = 32,
        delete_repository_group_id = 33
    }

    /** Properties of a client_msg. */
    interface Iclient_msg {

        /** client_msg _id */
        _id: client_to_svr.client_msg_id;

        /** client_msg _register_info */
        _register_info?: (client_to_svr.Iregister_info|null);

        /** client_msg _user_login_info */
        _user_login_info?: (client_to_svr.Iuser_login_info|null);

        /** client_msg _client_change_pwd */
        _client_change_pwd?: (client_to_svr.Iclient_change_pwd|null);

        /** client_msg _create_project */
        _create_project?: (client_to_svr.Icreate_project|null);

        /** client_msg _add_group_into_project */
        _add_group_into_project?: (client_to_svr.Iadd_group_into_project|null);

        /** client_msg _remove_group_from_project */
        _remove_group_from_project?: (client_to_svr.Iremove_group_from_project|null);

        /** client_msg _add_user_into_project */
        _add_user_into_project?: (client_to_svr.Iadd_user_into_project|null);

        /** client_msg _remove_user_from_project */
        _remove_user_from_project?: (client_to_svr.Iremove_user_from_project|null);

        /** client_msg _create_group */
        _create_group?: (client_to_svr.Icreate_group|null);

        /** client_msg _add_user_into_group */
        _add_user_into_group?: (client_to_svr.Iadd_user_into_group|null);

        /** client_msg _remove_user_from_group */
        _remove_user_from_group?: (client_to_svr.Iremove_user_from_group|null);

        /** client_msg _set_user_project_permission */
        _set_user_project_permission?: (client_to_svr.Iset_user_project_permission|null);

        /** client_msg _set_group_project_permission */
        _set_group_project_permission?: (client_to_svr.Iset_group_project_permission|null);

        /** client_msg _get_project_member */
        _get_project_member?: (client_to_svr.Iget_project_member|null);

        /** client_msg _get_group_member */
        _get_group_member?: (client_to_svr.Iget_group_member|null);

        /** client_msg _get_user_project_permission */
        _get_user_project_permission?: (client_to_svr.Iget_user_project_permission|null);

        /** client_msg _get_group_project_permission */
        _get_group_project_permission?: (client_to_svr.Iget_group_project_permission|null);

        /** client_msg _get_all_project */
        _get_all_project?: (client_to_svr.Iget_all_project|null);

        /** client_msg _get_all_group */
        _get_all_group?: (client_to_svr.Iget_all_group|null);

        /** client_msg _get_verification_code */
        _get_verification_code?: (client_to_svr.Iget_verification_code|null);

        /** client_msg _restore_passwnd */
        _restore_passwnd?: (client_to_svr.Irestore_passwnd|null);

        /** client_msg _confirm_verification_code */
        _confirm_verification_code?: (client_to_svr.Iconfirm_verification_code|null);

        /** client_msg _confirm_mail_verification_code */
        _confirm_mail_verification_code?: (client_to_svr.Iconfirm_mail_verification_code|null);

        /** client_msg _confirm_phone_verification_code */
        _confirm_phone_verification_code?: (client_to_svr.Iconfirm_phone_verification_code|null);

        /** client_msg _root_add_user_peas */
        _root_add_user_peas?: (client_to_svr.Iroot_add_user_peas|null);

        /** client_msg _manger_alloc_peas */
        _manger_alloc_peas?: (client_to_svr.Imanger_alloc_peas|null);

        /** client_msg _root_add_group_peas */
        _root_add_group_peas?: (client_to_svr.Iroot_add_group_peas|null);

        /** client_msg _root_add_project_peas */
        _root_add_project_peas?: (client_to_svr.Iroot_add_project_peas|null);

        /** client_msg _set_group_replace_peas */
        _set_group_replace_peas?: (client_to_svr.Iset_group_replace_peas|null);

        /** client_msg _set_project_replace_peas */
        _set_project_replace_peas?: (client_to_svr.Iset_project_replace_peas|null);

        /** client_msg _add_repository_group */
        _add_repository_group?: (client_to_svr.Ieditor_repository_group|null);

        /** client_msg _get_project_repository */
        _get_project_repository?: (client_to_svr.Iget_project_repository|null);

        /** client_msg _delete_repository_group */
        _delete_repository_group?: (client_to_svr.Ieditor_repository_group|null);
    }

    /** Represents a client_msg. */
    class client_msg implements Iclient_msg {

        /**
         * Constructs a new client_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: client_to_svr.Iclient_msg);

        /** client_msg _id. */
        public _id: client_to_svr.client_msg_id;

        /** client_msg _register_info. */
        public _register_info?: (client_to_svr.Iregister_info|null);

        /** client_msg _user_login_info. */
        public _user_login_info?: (client_to_svr.Iuser_login_info|null);

        /** client_msg _client_change_pwd. */
        public _client_change_pwd?: (client_to_svr.Iclient_change_pwd|null);

        /** client_msg _create_project. */
        public _create_project?: (client_to_svr.Icreate_project|null);

        /** client_msg _add_group_into_project. */
        public _add_group_into_project?: (client_to_svr.Iadd_group_into_project|null);

        /** client_msg _remove_group_from_project. */
        public _remove_group_from_project?: (client_to_svr.Iremove_group_from_project|null);

        /** client_msg _add_user_into_project. */
        public _add_user_into_project?: (client_to_svr.Iadd_user_into_project|null);

        /** client_msg _remove_user_from_project. */
        public _remove_user_from_project?: (client_to_svr.Iremove_user_from_project|null);

        /** client_msg _create_group. */
        public _create_group?: (client_to_svr.Icreate_group|null);

        /** client_msg _add_user_into_group. */
        public _add_user_into_group?: (client_to_svr.Iadd_user_into_group|null);

        /** client_msg _remove_user_from_group. */
        public _remove_user_from_group?: (client_to_svr.Iremove_user_from_group|null);

        /** client_msg _set_user_project_permission. */
        public _set_user_project_permission?: (client_to_svr.Iset_user_project_permission|null);

        /** client_msg _set_group_project_permission. */
        public _set_group_project_permission?: (client_to_svr.Iset_group_project_permission|null);

        /** client_msg _get_project_member. */
        public _get_project_member?: (client_to_svr.Iget_project_member|null);

        /** client_msg _get_group_member. */
        public _get_group_member?: (client_to_svr.Iget_group_member|null);

        /** client_msg _get_user_project_permission. */
        public _get_user_project_permission?: (client_to_svr.Iget_user_project_permission|null);

        /** client_msg _get_group_project_permission. */
        public _get_group_project_permission?: (client_to_svr.Iget_group_project_permission|null);

        /** client_msg _get_all_project. */
        public _get_all_project?: (client_to_svr.Iget_all_project|null);

        /** client_msg _get_all_group. */
        public _get_all_group?: (client_to_svr.Iget_all_group|null);

        /** client_msg _get_verification_code. */
        public _get_verification_code?: (client_to_svr.Iget_verification_code|null);

        /** client_msg _restore_passwnd. */
        public _restore_passwnd?: (client_to_svr.Irestore_passwnd|null);

        /** client_msg _confirm_verification_code. */
        public _confirm_verification_code?: (client_to_svr.Iconfirm_verification_code|null);

        /** client_msg _confirm_mail_verification_code. */
        public _confirm_mail_verification_code?: (client_to_svr.Iconfirm_mail_verification_code|null);

        /** client_msg _confirm_phone_verification_code. */
        public _confirm_phone_verification_code?: (client_to_svr.Iconfirm_phone_verification_code|null);

        /** client_msg _root_add_user_peas. */
        public _root_add_user_peas?: (client_to_svr.Iroot_add_user_peas|null);

        /** client_msg _manger_alloc_peas. */
        public _manger_alloc_peas?: (client_to_svr.Imanger_alloc_peas|null);

        /** client_msg _root_add_group_peas. */
        public _root_add_group_peas?: (client_to_svr.Iroot_add_group_peas|null);

        /** client_msg _root_add_project_peas. */
        public _root_add_project_peas?: (client_to_svr.Iroot_add_project_peas|null);

        /** client_msg _set_group_replace_peas. */
        public _set_group_replace_peas?: (client_to_svr.Iset_group_replace_peas|null);

        /** client_msg _set_project_replace_peas. */
        public _set_project_replace_peas?: (client_to_svr.Iset_project_replace_peas|null);

        /** client_msg _add_repository_group. */
        public _add_repository_group?: (client_to_svr.Ieditor_repository_group|null);

        /** client_msg _get_project_repository. */
        public _get_project_repository?: (client_to_svr.Iget_project_repository|null);

        /** client_msg _delete_repository_group. */
        public _delete_repository_group?: (client_to_svr.Ieditor_repository_group|null);

        /**
         * Creates a new client_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns client_msg instance
         */
        public static create(properties?: client_to_svr.Iclient_msg): client_to_svr.client_msg;

        /**
         * Encodes the specified client_msg message. Does not implicitly {@link client_to_svr.client_msg.verify|verify} messages.
         * @param message client_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: client_to_svr.Iclient_msg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified client_msg message, length delimited. Does not implicitly {@link client_to_svr.client_msg.verify|verify} messages.
         * @param message client_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: client_to_svr.Iclient_msg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a client_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns client_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): client_to_svr.client_msg;

        /**
         * Decodes a client_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns client_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): client_to_svr.client_msg;

        /**
         * Verifies a client_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace common. */
declare namespace common {

    /** permission_type enum. */
    enum permission_type {
        root = -1,
        manage = 0,
        read = 1,
        upload = 2,
        modify = 3,
        delete = 4,
        render = 5,
        all_look = 6,
        all_project_remove = 7,
        all_project_modify = 8,
        all_project_GM = 9,
        subitem_look = 10,
        subitem_modify = 11,
        common_project_look = 12,
        common_project_modify = 13,
        project_add_energy = 14,
        project_remove_energy = 15,
        project_allot_permission = 16,
        project_mange_people = 17,
        project_transfer_permission = 18,
        material_lib_look = 19,
        material_lib_modify = 20,
        material_effect_modify = 21,
        material_fork = 22,
        material_collect = 23,
        material_3d_look = 24,
        model_look = 25,
        model_upload = 26,
        content_manage = 27,
        normal_bake = 28,
        AO_build = 29,
        UV_build_ID = 30,
        map_look = 31,
        map_lib_modify = 32,
        texture_look = 33,
        texture_modify = 34,
        texture_output_sbsar = 35,
        texture_out_map = 36
    }

    /** repository_type enum. */
    enum repository_type {
        dynaimc = 0,
        substance = 1,
        model = 2,
        action = 3
    }
}

/** Namespace svr_to_client. */
declare namespace svr_to_client {

    /** status_code enum. */
    enum status_code {
        create_parent_project_success = -25,
        create_project_dir_success = -24,
        set_project_replace_peas_success = -23,
        set_group_replace_peas_success = -22,
        root_add_project_peas_success = -21,
        root_add_group_peas_success = -20,
        manger_alloc_peas_success = -19,
        root_add_user_peas_success = -18,
        send_verification_code_phone_success = -17,
        send_verification_code_mail_success = -16,
        confirm_verification_code_success = -15,
        restore_pwd_success = -14,
        set_group_project_permission_success = -13,
        remove_user_from_group_success = -12,
        add_user_into_group_success = -11,
        create_group_success = -10,
        set_user_project_permission_success = -9,
        remove_user_from_project_success = -8,
        add_user_into_project_success = -7,
        remove_group_from_project_success = -6,
        add_group_into_project_success = -5,
        create_project_success = -4,
        change_pwd_success = -3,
        user_login_success = -2,
        user_register_success = -1,
        success = 0,
        pwd_is_wrong = 1,
        verification_code_is_wrong = 2,
        no_authority = 3,
        no_permission = 4,
        repeated_email = 5,
        repeated_name = 6,
        repeated_phone = 7,
        invaild_user = 8,
        unverified_verification_code = 9,
        verification_code_timeout = 10,
        wrong_email = 11,
        wrong_phone = 12,
        not_root = 13,
        render_failed = 14,
        invalid_resource = 15,
        not_in_target_lib = 16,
        pbr_check_failed = 17,
        prefile_check_failed = 18,
        repeated_sbs_file = 19,
        invalid_sbs_file = 20,
        invalid_parent_dir = 21,
        invalid_parent = 22,
        project_is_exist = 23
    }

    /** Properties of a status_code_ntf. */
    interface Istatus_code_ntf {

        /** status_code_ntf _code */
        _code: svr_to_client.status_code;
    }

    /** Represents a status_code_ntf. */
    class status_code_ntf implements Istatus_code_ntf {

        /**
         * Constructs a new status_code_ntf.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Istatus_code_ntf);

        /** status_code_ntf _code. */
        public _code: svr_to_client.status_code;

        /**
         * Creates a new status_code_ntf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns status_code_ntf instance
         */
        public static create(properties?: svr_to_client.Istatus_code_ntf): svr_to_client.status_code_ntf;

        /**
         * Encodes the specified status_code_ntf message. Does not implicitly {@link svr_to_client.status_code_ntf.verify|verify} messages.
         * @param message status_code_ntf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Istatus_code_ntf, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified status_code_ntf message, length delimited. Does not implicitly {@link svr_to_client.status_code_ntf.verify|verify} messages.
         * @param message status_code_ntf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Istatus_code_ntf, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a status_code_ntf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns status_code_ntf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.status_code_ntf;

        /**
         * Decodes a status_code_ntf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns status_code_ntf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.status_code_ntf;

        /**
         * Verifies a status_code_ntf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a user_token. */
    interface Iuser_token {

        /** user_token token */
        token: string;
    }

    /** Represents a user_token. */
    class user_token implements Iuser_token {

        /**
         * Constructs a new user_token.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Iuser_token);

        /** user_token token. */
        public token: string;

        /**
         * Creates a new user_token instance using the specified properties.
         * @param [properties] Properties to set
         * @returns user_token instance
         */
        public static create(properties?: svr_to_client.Iuser_token): svr_to_client.user_token;

        /**
         * Encodes the specified user_token message. Does not implicitly {@link svr_to_client.user_token.verify|verify} messages.
         * @param message user_token message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Iuser_token, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified user_token message, length delimited. Does not implicitly {@link svr_to_client.user_token.verify|verify} messages.
         * @param message user_token message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Iuser_token, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a user_token message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns user_token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.user_token;

        /**
         * Decodes a user_token message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns user_token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.user_token;

        /**
         * Verifies a user_token message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a root_permission. */
    interface Iroot_permission {

        /** root_permission permission_list */
        permission_list?: (common.permission_type[]|null);
    }

    /** Represents a root_permission. */
    class root_permission implements Iroot_permission {

        /**
         * Constructs a new root_permission.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Iroot_permission);

        /** root_permission permission_list. */
        public permission_list: common.permission_type[];

        /**
         * Creates a new root_permission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns root_permission instance
         */
        public static create(properties?: svr_to_client.Iroot_permission): svr_to_client.root_permission;

        /**
         * Encodes the specified root_permission message. Does not implicitly {@link svr_to_client.root_permission.verify|verify} messages.
         * @param message root_permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Iroot_permission, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified root_permission message, length delimited. Does not implicitly {@link svr_to_client.root_permission.verify|verify} messages.
         * @param message root_permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Iroot_permission, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a root_permission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns root_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.root_permission;

        /**
         * Decodes a root_permission message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns root_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.root_permission;

        /**
         * Verifies a root_permission message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a user_permission. */
    interface Iuser_permission {

        /** user_permission user_permission_list */
        user_permission_list?: (common.permission_type[]|null);
    }

    /** Represents a user_permission. */
    class user_permission implements Iuser_permission {

        /**
         * Constructs a new user_permission.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Iuser_permission);

        /** user_permission user_permission_list. */
        public user_permission_list: common.permission_type[];

        /**
         * Creates a new user_permission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns user_permission instance
         */
        public static create(properties?: svr_to_client.Iuser_permission): svr_to_client.user_permission;

        /**
         * Encodes the specified user_permission message. Does not implicitly {@link svr_to_client.user_permission.verify|verify} messages.
         * @param message user_permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Iuser_permission, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified user_permission message, length delimited. Does not implicitly {@link svr_to_client.user_permission.verify|verify} messages.
         * @param message user_permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Iuser_permission, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a user_permission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns user_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.user_permission;

        /**
         * Decodes a user_permission message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns user_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.user_permission;

        /**
         * Verifies a user_permission message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a project_member. */
    interface Iproject_member {

        /** project_member parent_project */
        parent_project: string;

        /** project_member project_name */
        project_name: string;

        /** project_member groups */
        groups?: (string[]|null);

        /** project_member users */
        users?: (svr_to_client.Iproject_user_data[]|null);
    }

    /** Represents a project_member. */
    class project_member implements Iproject_member {

        /**
         * Constructs a new project_member.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Iproject_member);

        /** project_member parent_project. */
        public parent_project: string;

        /** project_member project_name. */
        public project_name: string;

        /** project_member groups. */
        public groups: string[];

        /** project_member users. */
        public users: svr_to_client.Iproject_user_data[];

        /**
         * Creates a new project_member instance using the specified properties.
         * @param [properties] Properties to set
         * @returns project_member instance
         */
        public static create(properties?: svr_to_client.Iproject_member): svr_to_client.project_member;

        /**
         * Encodes the specified project_member message. Does not implicitly {@link svr_to_client.project_member.verify|verify} messages.
         * @param message project_member message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Iproject_member, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified project_member message, length delimited. Does not implicitly {@link svr_to_client.project_member.verify|verify} messages.
         * @param message project_member message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Iproject_member, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a project_member message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns project_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.project_member;

        /**
         * Decodes a project_member message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns project_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.project_member;

        /**
         * Verifies a project_member message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a project_user_data. */
    interface Iproject_user_data {

        /** project_user_data name */
        name: string;

        /** project_user_data permission_list */
        permission_list?: (common.permission_type[]|null);
    }

    /** Represents a project_user_data. */
    class project_user_data implements Iproject_user_data {

        /**
         * Constructs a new project_user_data.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Iproject_user_data);

        /** project_user_data name. */
        public name: string;

        /** project_user_data permission_list. */
        public permission_list: common.permission_type[];

        /**
         * Creates a new project_user_data instance using the specified properties.
         * @param [properties] Properties to set
         * @returns project_user_data instance
         */
        public static create(properties?: svr_to_client.Iproject_user_data): svr_to_client.project_user_data;

        /**
         * Encodes the specified project_user_data message. Does not implicitly {@link svr_to_client.project_user_data.verify|verify} messages.
         * @param message project_user_data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Iproject_user_data, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified project_user_data message, length delimited. Does not implicitly {@link svr_to_client.project_user_data.verify|verify} messages.
         * @param message project_user_data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Iproject_user_data, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a project_user_data message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns project_user_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.project_user_data;

        /**
         * Decodes a project_user_data message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns project_user_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.project_user_data;

        /**
         * Verifies a project_user_data message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a group_member. */
    interface Igroup_member {

        /** group_member group_name */
        group_name: string;

        /** group_member users */
        users?: (string[]|null);
    }

    /** Represents a group_member. */
    class group_member implements Igroup_member {

        /**
         * Constructs a new group_member.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Igroup_member);

        /** group_member group_name. */
        public group_name: string;

        /** group_member users. */
        public users: string[];

        /**
         * Creates a new group_member instance using the specified properties.
         * @param [properties] Properties to set
         * @returns group_member instance
         */
        public static create(properties?: svr_to_client.Igroup_member): svr_to_client.group_member;

        /**
         * Encodes the specified group_member message. Does not implicitly {@link svr_to_client.group_member.verify|verify} messages.
         * @param message group_member message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Igroup_member, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified group_member message, length delimited. Does not implicitly {@link svr_to_client.group_member.verify|verify} messages.
         * @param message group_member message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Igroup_member, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a group_member message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns group_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.group_member;

        /**
         * Decodes a group_member message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns group_member
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.group_member;

        /**
         * Verifies a group_member message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an all_group_list. */
    interface Iall_group_list {

        /** all_group_list group */
        group?: (string[]|null);
    }

    /** Represents an all_group_list. */
    class all_group_list implements Iall_group_list {

        /**
         * Constructs a new all_group_list.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Iall_group_list);

        /** all_group_list group. */
        public group: string[];

        /**
         * Creates a new all_group_list instance using the specified properties.
         * @param [properties] Properties to set
         * @returns all_group_list instance
         */
        public static create(properties?: svr_to_client.Iall_group_list): svr_to_client.all_group_list;

        /**
         * Encodes the specified all_group_list message. Does not implicitly {@link svr_to_client.all_group_list.verify|verify} messages.
         * @param message all_group_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Iall_group_list, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified all_group_list message, length delimited. Does not implicitly {@link svr_to_client.all_group_list.verify|verify} messages.
         * @param message all_group_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Iall_group_list, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an all_group_list message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns all_group_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.all_group_list;

        /**
         * Decodes an all_group_list message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns all_group_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.all_group_list;

        /**
         * Verifies an all_group_list message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a group_permission. */
    interface Igroup_permission {

        /** group_permission group_name */
        group_name: string;

        /** group_permission group_permission_list */
        group_permission_list?: (common.permission_type[]|null);
    }

    /** Represents a group_permission. */
    class group_permission implements Igroup_permission {

        /**
         * Constructs a new group_permission.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Igroup_permission);

        /** group_permission group_name. */
        public group_name: string;

        /** group_permission group_permission_list. */
        public group_permission_list: common.permission_type[];

        /**
         * Creates a new group_permission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns group_permission instance
         */
        public static create(properties?: svr_to_client.Igroup_permission): svr_to_client.group_permission;

        /**
         * Encodes the specified group_permission message. Does not implicitly {@link svr_to_client.group_permission.verify|verify} messages.
         * @param message group_permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Igroup_permission, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified group_permission message, length delimited. Does not implicitly {@link svr_to_client.group_permission.verify|verify} messages.
         * @param message group_permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Igroup_permission, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a group_permission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns group_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.group_permission;

        /**
         * Decodes a group_permission message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns group_permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.group_permission;

        /**
         * Verifies a group_permission message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a project. */
    interface Iproject {

        /** project project */
        project: string;

        /** project sub_project */
        sub_project: string;
    }

    /** Represents a project. */
    class project implements Iproject {

        /**
         * Constructs a new project.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Iproject);

        /** project project. */
        public project: string;

        /** project sub_project. */
        public sub_project: string;

        /**
         * Creates a new project instance using the specified properties.
         * @param [properties] Properties to set
         * @returns project instance
         */
        public static create(properties?: svr_to_client.Iproject): svr_to_client.project;

        /**
         * Encodes the specified project message. Does not implicitly {@link svr_to_client.project.verify|verify} messages.
         * @param message project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Iproject, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified project message, length delimited. Does not implicitly {@link svr_to_client.project.verify|verify} messages.
         * @param message project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Iproject, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a project message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.project;

        /**
         * Decodes a project message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.project;

        /**
         * Verifies a project message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an all_project_list. */
    interface Iall_project_list {

        /** all_project_list project */
        project?: (svr_to_client.Iproject[]|null);
    }

    /** Represents an all_project_list. */
    class all_project_list implements Iall_project_list {

        /**
         * Constructs a new all_project_list.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Iall_project_list);

        /** all_project_list project. */
        public project: svr_to_client.Iproject[];

        /**
         * Creates a new all_project_list instance using the specified properties.
         * @param [properties] Properties to set
         * @returns all_project_list instance
         */
        public static create(properties?: svr_to_client.Iall_project_list): svr_to_client.all_project_list;

        /**
         * Encodes the specified all_project_list message. Does not implicitly {@link svr_to_client.all_project_list.verify|verify} messages.
         * @param message all_project_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Iall_project_list, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified all_project_list message, length delimited. Does not implicitly {@link svr_to_client.all_project_list.verify|verify} messages.
         * @param message all_project_list message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Iall_project_list, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an all_project_list message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns all_project_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.all_project_list;

        /**
         * Decodes an all_project_list message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns all_project_list
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.all_project_list;

        /**
         * Verifies an all_project_list message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a verification_code_ntf. */
    interface Iverification_code_ntf {

        /** verification_code_ntf verification_code */
        verification_code?: (string|null);
    }

    /** Represents a verification_code_ntf. */
    class verification_code_ntf implements Iverification_code_ntf {

        /**
         * Constructs a new verification_code_ntf.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Iverification_code_ntf);

        /** verification_code_ntf verification_code. */
        public verification_code: string;

        /**
         * Creates a new verification_code_ntf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns verification_code_ntf instance
         */
        public static create(properties?: svr_to_client.Iverification_code_ntf): svr_to_client.verification_code_ntf;

        /**
         * Encodes the specified verification_code_ntf message. Does not implicitly {@link svr_to_client.verification_code_ntf.verify|verify} messages.
         * @param message verification_code_ntf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Iverification_code_ntf, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified verification_code_ntf message, length delimited. Does not implicitly {@link svr_to_client.verification_code_ntf.verify|verify} messages.
         * @param message verification_code_ntf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Iverification_code_ntf, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a verification_code_ntf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns verification_code_ntf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.verification_code_ntf;

        /**
         * Decodes a verification_code_ntf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns verification_code_ntf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.verification_code_ntf;

        /**
         * Verifies a verification_code_ntf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a project_repository. */
    interface Iproject_repository {

        /** project_repository project */
        project: string;

        /** project_repository sub_project */
        sub_project: string;

        /** project_repository repository */
        repository: common.repository_type;

        /** project_repository groups */
        groups?: (svr_to_client.Irepository_group[]|null);
    }

    /** Represents a project_repository. */
    class project_repository implements Iproject_repository {

        /**
         * Constructs a new project_repository.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Iproject_repository);

        /** project_repository project. */
        public project: string;

        /** project_repository sub_project. */
        public sub_project: string;

        /** project_repository repository. */
        public repository: common.repository_type;

        /** project_repository groups. */
        public groups: svr_to_client.Irepository_group[];

        /**
         * Creates a new project_repository instance using the specified properties.
         * @param [properties] Properties to set
         * @returns project_repository instance
         */
        public static create(properties?: svr_to_client.Iproject_repository): svr_to_client.project_repository;

        /**
         * Encodes the specified project_repository message. Does not implicitly {@link svr_to_client.project_repository.verify|verify} messages.
         * @param message project_repository message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Iproject_repository, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified project_repository message, length delimited. Does not implicitly {@link svr_to_client.project_repository.verify|verify} messages.
         * @param message project_repository message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Iproject_repository, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a project_repository message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns project_repository
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.project_repository;

        /**
         * Decodes a project_repository message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns project_repository
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.project_repository;

        /**
         * Verifies a project_repository message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a repository_group. */
    interface Irepository_group {

        /** repository_group name */
        name: string;

        /** repository_group leafs */
        leafs?: (svr_to_client.Irepository_group_leaf[]|null);
    }

    /** Represents a repository_group. */
    class repository_group implements Irepository_group {

        /**
         * Constructs a new repository_group.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Irepository_group);

        /** repository_group name. */
        public name: string;

        /** repository_group leafs. */
        public leafs: svr_to_client.Irepository_group_leaf[];

        /**
         * Creates a new repository_group instance using the specified properties.
         * @param [properties] Properties to set
         * @returns repository_group instance
         */
        public static create(properties?: svr_to_client.Irepository_group): svr_to_client.repository_group;

        /**
         * Encodes the specified repository_group message. Does not implicitly {@link svr_to_client.repository_group.verify|verify} messages.
         * @param message repository_group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Irepository_group, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified repository_group message, length delimited. Does not implicitly {@link svr_to_client.repository_group.verify|verify} messages.
         * @param message repository_group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Irepository_group, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a repository_group message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns repository_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.repository_group;

        /**
         * Decodes a repository_group message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns repository_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.repository_group;

        /**
         * Verifies a repository_group message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a repository_group_leaf. */
    interface Irepository_group_leaf {

        /** repository_group_leaf name */
        name: string;

        /** repository_group_leaf res_num */
        res_num: number;
    }

    /** Represents a repository_group_leaf. */
    class repository_group_leaf implements Irepository_group_leaf {

        /**
         * Constructs a new repository_group_leaf.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Irepository_group_leaf);

        /** repository_group_leaf name. */
        public name: string;

        /** repository_group_leaf res_num. */
        public res_num: number;

        /**
         * Creates a new repository_group_leaf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns repository_group_leaf instance
         */
        public static create(properties?: svr_to_client.Irepository_group_leaf): svr_to_client.repository_group_leaf;

        /**
         * Encodes the specified repository_group_leaf message. Does not implicitly {@link svr_to_client.repository_group_leaf.verify|verify} messages.
         * @param message repository_group_leaf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Irepository_group_leaf, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified repository_group_leaf message, length delimited. Does not implicitly {@link svr_to_client.repository_group_leaf.verify|verify} messages.
         * @param message repository_group_leaf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Irepository_group_leaf, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a repository_group_leaf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns repository_group_leaf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.repository_group_leaf;

        /**
         * Decodes a repository_group_leaf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns repository_group_leaf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.repository_group_leaf;

        /**
         * Verifies a repository_group_leaf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a create_project_result. */
    interface Icreate_project_result {

        /** create_project_result parent */
        parent: string;

        /** create_project_result project */
        project: string;
    }

    /** Represents a create_project_result. */
    class create_project_result implements Icreate_project_result {

        /**
         * Constructs a new create_project_result.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Icreate_project_result);

        /** create_project_result parent. */
        public parent: string;

        /** create_project_result project. */
        public project: string;

        /**
         * Creates a new create_project_result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns create_project_result instance
         */
        public static create(properties?: svr_to_client.Icreate_project_result): svr_to_client.create_project_result;

        /**
         * Encodes the specified create_project_result message. Does not implicitly {@link svr_to_client.create_project_result.verify|verify} messages.
         * @param message create_project_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Icreate_project_result, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified create_project_result message, length delimited. Does not implicitly {@link svr_to_client.create_project_result.verify|verify} messages.
         * @param message create_project_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Icreate_project_result, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a create_project_result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns create_project_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.create_project_result;

        /**
         * Decodes a create_project_result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns create_project_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.create_project_result;

        /**
         * Verifies a create_project_result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an editor_repository_group. */
    interface Ieditor_repository_group {

        /** editor_repository_group project */
        project: string;

        /** editor_repository_group sub_project */
        sub_project: string;

        /** editor_repository_group parent */
        parent: string;

        /** editor_repository_group name */
        name: string;

        /** editor_repository_group repository_type */
        repository_type: common.repository_type;
    }

    /** Represents an editor_repository_group. */
    class editor_repository_group implements Ieditor_repository_group {

        /**
         * Constructs a new editor_repository_group.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Ieditor_repository_group);

        /** editor_repository_group project. */
        public project: string;

        /** editor_repository_group sub_project. */
        public sub_project: string;

        /** editor_repository_group parent. */
        public parent: string;

        /** editor_repository_group name. */
        public name: string;

        /** editor_repository_group repository_type. */
        public repository_type: common.repository_type;

        /**
         * Creates a new editor_repository_group instance using the specified properties.
         * @param [properties] Properties to set
         * @returns editor_repository_group instance
         */
        public static create(properties?: svr_to_client.Ieditor_repository_group): svr_to_client.editor_repository_group;

        /**
         * Encodes the specified editor_repository_group message. Does not implicitly {@link svr_to_client.editor_repository_group.verify|verify} messages.
         * @param message editor_repository_group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Ieditor_repository_group, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified editor_repository_group message, length delimited. Does not implicitly {@link svr_to_client.editor_repository_group.verify|verify} messages.
         * @param message editor_repository_group message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Ieditor_repository_group, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an editor_repository_group message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns editor_repository_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.editor_repository_group;

        /**
         * Decodes an editor_repository_group message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns editor_repository_group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.editor_repository_group;

        /**
         * Verifies an editor_repository_group message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** svr_msg_id enum. */
    enum svr_msg_id {
        status_code_ntf_id = 1,
        user_token_id = 2,
        root_permission_id = 3,
        user_permission_id = 4,
        project_member_id = 5,
        group_member_id = 6,
        all_group_list_id = 7,
        group_permission_id = 8,
        all_project_list_id = 9,
        verification_code_ntf_id = 10,
        project_repository_id = 11,
        create_project_result_id = 12,
        create_repository_group_id = 13,
        delete_repository_group_id = 14
    }

    /** Properties of a svr_msg. */
    interface Isvr_msg {

        /** svr_msg _id */
        _id: svr_to_client.svr_msg_id;

        /** svr_msg _status_code_ntf */
        _status_code_ntf?: (svr_to_client.Istatus_code_ntf|null);

        /** svr_msg _user_token */
        _user_token?: (svr_to_client.Iuser_token|null);

        /** svr_msg _root_permission */
        _root_permission?: (svr_to_client.Iroot_permission|null);

        /** svr_msg _user_permission */
        _user_permission?: (svr_to_client.Iuser_permission|null);

        /** svr_msg _project_member */
        _project_member?: (svr_to_client.Iproject_member|null);

        /** svr_msg _group_member */
        _group_member?: (svr_to_client.Igroup_member|null);

        /** svr_msg _all_group_list */
        _all_group_list?: (svr_to_client.Iall_group_list|null);

        /** svr_msg _group_permission */
        _group_permission?: (svr_to_client.Igroup_permission|null);

        /** svr_msg _all_project_list */
        _all_project_list?: (svr_to_client.Iall_project_list|null);

        /** svr_msg _verification_code_ntf */
        _verification_code_ntf?: (svr_to_client.Iverification_code_ntf|null);

        /** svr_msg _project_repository */
        _project_repository?: (svr_to_client.Iproject_repository|null);

        /** svr_msg _create_project_result */
        _create_project_result?: (svr_to_client.Icreate_project_result|null);

        /** svr_msg _create_repository_group */
        _create_repository_group?: (svr_to_client.Ieditor_repository_group|null);

        /** svr_msg _delete_repository_group */
        _delete_repository_group?: (svr_to_client.Ieditor_repository_group|null);
    }

    /** Represents a svr_msg. */
    class svr_msg implements Isvr_msg {

        /**
         * Constructs a new svr_msg.
         * @param [properties] Properties to set
         */
        constructor(properties?: svr_to_client.Isvr_msg);

        /** svr_msg _id. */
        public _id: svr_to_client.svr_msg_id;

        /** svr_msg _status_code_ntf. */
        public _status_code_ntf?: (svr_to_client.Istatus_code_ntf|null);

        /** svr_msg _user_token. */
        public _user_token?: (svr_to_client.Iuser_token|null);

        /** svr_msg _root_permission. */
        public _root_permission?: (svr_to_client.Iroot_permission|null);

        /** svr_msg _user_permission. */
        public _user_permission?: (svr_to_client.Iuser_permission|null);

        /** svr_msg _project_member. */
        public _project_member?: (svr_to_client.Iproject_member|null);

        /** svr_msg _group_member. */
        public _group_member?: (svr_to_client.Igroup_member|null);

        /** svr_msg _all_group_list. */
        public _all_group_list?: (svr_to_client.Iall_group_list|null);

        /** svr_msg _group_permission. */
        public _group_permission?: (svr_to_client.Igroup_permission|null);

        /** svr_msg _all_project_list. */
        public _all_project_list?: (svr_to_client.Iall_project_list|null);

        /** svr_msg _verification_code_ntf. */
        public _verification_code_ntf?: (svr_to_client.Iverification_code_ntf|null);

        /** svr_msg _project_repository. */
        public _project_repository?: (svr_to_client.Iproject_repository|null);

        /** svr_msg _create_project_result. */
        public _create_project_result?: (svr_to_client.Icreate_project_result|null);

        /** svr_msg _create_repository_group. */
        public _create_repository_group?: (svr_to_client.Ieditor_repository_group|null);

        /** svr_msg _delete_repository_group. */
        public _delete_repository_group?: (svr_to_client.Ieditor_repository_group|null);

        /**
         * Creates a new svr_msg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns svr_msg instance
         */
        public static create(properties?: svr_to_client.Isvr_msg): svr_to_client.svr_msg;

        /**
         * Encodes the specified svr_msg message. Does not implicitly {@link svr_to_client.svr_msg.verify|verify} messages.
         * @param message svr_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: svr_to_client.Isvr_msg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified svr_msg message, length delimited. Does not implicitly {@link svr_to_client.svr_msg.verify|verify} messages.
         * @param message svr_msg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: svr_to_client.Isvr_msg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a svr_msg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns svr_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): svr_to_client.svr_msg;

        /**
         * Decodes a svr_msg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns svr_msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): svr_to_client.svr_msg;

        /**
         * Verifies a svr_msg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
