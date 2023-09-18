function PatientInput({
  label,
  name,
  placeholder,
  value,
  handleChange,
  correctPatientData,
  requiredId,
  errorMessageId,
  errorMessage,
}) {
  return (
    <label className="flex justify-center">
      <span className="w-[145px]">{label}</span>
      <div>
        <input
          className={
            correctPatientData
              ? "border-green-900 border-b-[1px] pl-3 ml-3 py-1 bg-slate-200 outline-none"
              : "border-red-900 border-b-[1px] pl-3 ml-3 py-1 bg-slate-200 outline-none"
          }
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        <span id={requiredId} className="text-red-900 pl-1 invisible">
          *Required
        </span>
        <p id={errorMessageId} className="invisible text-red-900 pl-3 pt-1">
          {errorMessage}
        </p>
      </div>
    </label>
  );
}

export default PatientInput;
