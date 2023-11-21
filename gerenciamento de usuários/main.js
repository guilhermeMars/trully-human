'use strict'

//Create
const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

//Update
const openUpdate = () => document.getElementById('Update')
    .classList.add('active')

const closeUpdate = () => document.getElementById('Update')
    .classList.remove('active')

document.getElementById('closeUpdate')
    .addEventListener('click', closeUpdate)

// JavaScript para controlar o comportamento dos modais
const updateButton = document.querySelector('form[name="updateResourceForm"] button[name="atualizar"]');

updateButton.addEventListener('click', () => {
    const form = document.forms['updateResourceForm'];
    form.submit();
});