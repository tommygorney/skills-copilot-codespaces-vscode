function skillsMember() {
    this.name = 'Member';
    this.age = 24;
    this.skills = ['JavaScript', 'React', 'Node'];
    this.getSkills = function () {
        return this.skills;
    };
}