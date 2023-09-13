# `Checkbox` headless react component

```jsx
function MyCheckbox() {
  const [checked, setChecked] = useState(true);
  const toggle = useCallback(() => setChecked((b) => !b), [setChecked]);

  return (
    <>
      <Checkbox
        toggle={toggle}
        checked={checked}
        label="Test"
        className="bg-white"
        mergeClasses={twMerge}
        checkedClass="bg-blue-500"
      />
      Test
    </>
  );
}
```

This checkbox is fully accessible and fully customizable.

If not? then please make a pull request :\)
