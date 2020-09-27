<template>
    <div>
        <h2>Add Books</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Book Id</label>
                <input type="text" v-model="book.book_id" v-validate="'required'" name="book_id" class="form-control" :class="{ 'is-invalid': submitted && errors.has('book_id') }" />
                <div v-if="submitted && errors.has('book_id')" class="invalid-feedback">{{ errors.first('book_id') }}</div>
            </div>
            <div class="form-group">
                <label for="name">Title</label>
                <input type="text" v-model="book.title" v-validate="'required'" name="title" class="form-control" :class="{ 'is-invalid': submitted && errors.has('title') }" />
                <div v-if="submitted && errors.has('title')" class="invalid-feedback">{{ errors.first('title') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Author Name</label>
                <input type="text" v-model="book.author_name" v-validate="{ required: true, min: 6 }" name="author_name" class="form-control" :class="{ 'is-invalid': submitted && errors.has('author_name') }" />
                <div v-if="submitted && errors.has('author_name')" class="invalid-feedback">{{ errors.first('author_name') }}</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Cost</label>
                <input type="text" v-model="book.cost" v-validate="{ required: true, min: 6 }" name="cost" class="form-control" :class="{ 'is-invalid': submitted && errors.has('cost') }" />
                <div v-if="submitted && errors.has('cost')" class="invalid-feedback">{{ errors.first('cost') }}</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" :disabled="status.registering">Add Book</button>
                <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                <router-link to="/" class="btn btn-link">Cancel</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            book: {
                book_id: '',
                title: '', 
                author_name: '', 
                cost: null 
            },
            submitted: false
        }
    },
    computed: {
        ...mapState(['status'])
    },
    methods: {
        ...mapActions(['addbook']),
        handleSubmit(e) {
            this.submitted = true;
            console.log(this.book)
            this.addbook(this.book)
        }
    }
};
</script>