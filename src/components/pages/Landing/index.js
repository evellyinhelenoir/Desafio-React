import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import Header from '../../Header';
import Card from '../../card/Card';

export default class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: this.props.state ? this.props.state.message : '',
        }
    }

    signIn = () => {
        const url = "http://localhost:8080/leads"
        const data = {
            nome: this.nome,
            email: this.email,
            observacoes: this.observacoes
        }
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        }
        fetch(url, requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.headers.get("Authorization")
                }
                throw new Error("Login Inválido.")
            }).then(token => {
                localStorage.setItem('token', token);
            }).catch(e => {
                this.setState({ message: e.message })
            }

            );
    }

    render() {
        return (
            <div>
                <Card>
                    <Header title="Coletor de Leads" />
                    <hr />
                    {
                        this.state.message !== '' ? (
                            <Alert color='danger' className='text-center'>{this.state.message}</Alert>
                        ) : ''
                    }
                    <Form>
                        <FormGroup>
                            <Label for="nome">Nome</Label>

                            <Input
                                type="text"
                                id="nome"
                                placeholder="Digite o seu nome"
                                onChange={e => this.nome = e.target.value} />

                        </FormGroup>

                        <FormGroup>
                            <Label for="email">Email</Label>

                            <Input
                                type="email"
                                id="email"
                                placeholder="Digite o seu email"
                                onChange={e => this.email = e.target.value} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="obs">Observações</Label>

                            <textarea
                                class="form-control"
                                id="observacoes"
                                rows="3"
                                placeholder="Nos conte um pouco sobre você"
                                onChange={e => this.observacoes = e.target.value} />
                        </FormGroup>

                    </Form>
                </Card>

                <Button color="primary" block className='Enviar' onClick={this.signIn}>Enviar</Button>

            </div>

        );
    }
}