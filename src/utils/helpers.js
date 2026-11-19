export const truncateText =
    (text, length = 40) => {

        if (text.length <= length) {

            return text;
        }

        return (
            text.substring(
                0,
                length
            ) + "..."
        );
    };

export const formatRole =
    (role) => {

        return role
            .replace("ROLE_", "")
            .toLowerCase();
    };

export const capitalize =
    (text) => {

        return (
            text.charAt(0)
                .toUpperCase()
            +
            text.slice(1)
        );
    };