public class Student {

    private String studentName;
    private String fatherName;
    private String motherName;
    private String phone;
    private String address;
    private String course;
    private String otherInfo;

    public Student() {
    }

    public Student(String studentName,
                   String fatherName,
                   String motherName,
                   String phone,
                   String address,
                   String course,
                   String otherInfo) {
        this.studentName = studentName;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.phone = phone;
        this.address = address;
        this.course = course;
        this.otherInfo = otherInfo;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getOtherInfo() {
        return otherInfo;
    }

    public void setOtherInfo(String otherInfo) {
        this.otherInfo = otherInfo;
    }

    @Override
    public String toString() {
        return "Student{" +
                "studentName='" + studentName + '\'' +
                ", fatherName='" + fatherName + '\'' +
                ", motherName='" + motherName + '\'' +
                ", phone='" + phone + '\'' +
                ", address='" + address + '\'' +
                ", course='" + course + '\'' +
                ", otherInfo='" + otherInfo + '\'' +
                '}';
    }
}
