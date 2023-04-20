interface CheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox = ({ checked, onChange }: CheckBoxProps) => {

  const handleCheckBoxChange = () => {
    onChange(!checked);
  };

  return (
    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckBoxChange}
        style={{ height: '0', width: '0', opacity: 0, zIndex: -1 }}
      />
      <div
        style={{
          height: '20px',
          width: '20px',
          backgroundColor: checked ? '#F58020' : '#FDFDFF',
          border: '2px solid #F58020',
          borderRadius: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 150ms',
          cursor: 'pointer',
        }}
      >
        {checked && <svg viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 4.5L4.5 7.5L10.5 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </div>
    </label>
  );
};

export default CheckBox;
