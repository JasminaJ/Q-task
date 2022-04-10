import debounce from '../helpers/debounce';

type SearchInputProps = {
    message?: string;
    placehodler?: string;
    onChangeCallback: (e: string) => void;
};
const SearchInput = ({ message, placehodler = '', onChangeCallback }: SearchInputProps) => {
    console.log(`${message} Search Input`);

    const onChangeHandler = debounce((event) => onChangeCallback(event.target.value), 500);

    return (
        <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
                Search
            </span>
            <input
                onChange={onChangeHandler}
                type="text"
                className="form-control"
                placeholder={placehodler}
            />
        </div>
    );
};

export default SearchInput;
